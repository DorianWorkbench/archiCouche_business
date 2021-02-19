import express from "express";
import bodyParser from "body-parser";
import bdd from "./bdd/connexion";

import { UserService } from "./Service/userService";
import { UserRepository } from "./Repository/userRepository";

import { factoryRoutesUser } from "./Routes/userRoutes";
import { factoryRouteRefund } from "./Routes/refundRoutes";

import { RefundRepository } from "./Repository/refundRepository";
import { RefundService } from "./Service/refundService";

bdd
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

const userService: UserService = new UserService(new UserRepository());
const refundService:RefundService = new RefundService(new RefundRepository());

export const app = express();

app.use(bodyParser.json());

app.use("/user", factoryRoutesUser(userService));
app.use("/refund", factoryRouteRefund(refundService));