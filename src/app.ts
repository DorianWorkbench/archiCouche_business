import express from "express";
import bodyParser from "body-parser";
import { UserService } from "./Service/userService";
import { UserRepository } from "./Repository/userRepository";
import bdd from "./bdd/connexion";
import { factoryRoutes } from "./Routes/userRoutes";

bdd
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

const userService: UserService = new UserService(new UserRepository());

export const app = express();

app.use(bodyParser.json());

app.use("/user", factoryRoutes(userService));
