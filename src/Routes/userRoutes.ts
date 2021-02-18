import express from "express";
import { Request, Response } from "express";
import { UserController } from "../Controller/userController";
import { UserRepository } from "../Repository/userRepository";

export function factoryRoutes(repo: UserRepository) {
  const router = express.Router();
  const userController = new UserController(repo);

  router.post("/", (req: Request, res: Response) =>
    userController.createUser(req, res)
  );
  router.get("/", (req: Request, res: Response) =>
    userController.getAllUser(res)
  );
  router.get("/:userId", (req: Request, res: Response) =>
    userController.getUser(req, res)
  );
  return router;
}
