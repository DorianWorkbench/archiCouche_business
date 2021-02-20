import express from "express";
import bodyParser from "body-parser";
import bdd from "./bdd/connexion";

import { UserService } from "./Service/userService";
import { UserRepository } from "./Repository/userRepository";

import { factoryUserRoutes } from "./Routes/userRoutes";
import { factoryRefundRoutes } from "./Routes/refundRoutes";
import { factoryRoutesRoom } from "./Routes/roomRoutes";

import { RefundRepository } from "./Repository/refundRepository";
import { RefundService } from "./Service/refundService";

import { RoomService } from "./Service/roomService";
import { RoomRepository } from "./Repository/roomRepository";

bdd
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

const userService: UserService = new UserService(new UserRepository());
const refundService: RefundService = new RefundService(new RefundRepository());
const roomService: RoomService = new RoomService(
  new RoomRepository(new UserRepository())
);

export const app = express();

app.use(bodyParser.json());

app.use("/user", factoryUserRoutes(userService));
app.use("/refund", factoryRefundRoutes(refundService));
app.use("/room", factoryRoutesRoom(roomService));
