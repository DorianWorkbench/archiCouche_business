import express from "express";
import { Request, Response } from "express";
import { UserController } from "../Controller/userController";

export function factoryRoutes() {
  const router = express.Router();

  router.post("/", (req: Request, res: Response) =>
    UserController.createUser()
  );
  router.get("/", (req: Request, res: Response) => UserController.getUser());
}
