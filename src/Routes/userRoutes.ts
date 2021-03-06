import express from "express";
import { Request, Response } from "express";
import { UserController } from "../Controller/userController";
import { UserRepository } from "../Repository/userRepository";
import { UserService } from "../Service/userService";

export function factoryUserRoutes(service: UserService) {
  const router = express.Router();
  const userController = new UserController(service);

  router.post("/", (req: Request, res: Response) =>
    userController.createUser(req, res)
  );
  router.get("/", (req: Request, res: Response) =>
    userController.getAllUser(res)
  );
  router.get("/:userId", (req: Request, res: Response) =>
    userController.getUser(req, res)
  );
  router.put("/", (req: Request, res: Response) => {
    userController.updateUser(req, res);
  });
  return router;
}
