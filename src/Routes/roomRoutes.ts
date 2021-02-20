import { RoomService } from "../Service/roomService";
import { Router, Request, Response } from "express";
import { RoomController } from "../Controller/roomController";

export function factoryRoutesRoom(service: RoomService) {
  const router = Router();
  const roomController = new RoomController(service);

  router.post("/", (req: Request, res: Response) => {
    roomController.addRoom(req, res);
  });

  return router;
}
