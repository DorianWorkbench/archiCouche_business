import { RoomService } from "../Service/roomService";
import { Request, Response } from "express";
import Joi, { string } from "joi";

import { userGetOne, userUpdate } from "../DTO/UserDTO";
import { CreateRoomDTO } from "../DTO/RoomDTO";

export class RoomController {
  constructor(private service: RoomService) {}

  async addRoom(req: Request, res: Response) {
    try {
      const DTOroom: CreateRoomDTO = {
        name: req.body.name,
      };
      const DTOuser: userGetOne = {
        userId: req.body.userId,
      };
      const DTOuserUpdate: userUpdate = {
        id: req.body.userId,
      };
      const verifRoom: Joi.ObjectSchema = Joi.object({
        name: string().required(),
      });
      const verifUser: Joi.ObjectSchema = Joi.object({
        userId: string().required(),
      });

      if (verifRoom.validate(DTOroom).error) {
        return res
          .status(400)
          .json({ err: "Vous n'avez pas rentré des attributs valides" });
      }
      if (verifUser.validate(DTOuser).error) {
        return res
          .status(400)
          .json({ err: "Vous n'avez pas rentré des attributs valides" });
      }

      const room = await this.service.createRoom(
        DTOroom,
        DTOuser,
        DTOuserUpdate
      );

      return res.status(200).json(room);
    } catch (e) {
      return res.send(500).json({ err: e });
    }
  }
}
