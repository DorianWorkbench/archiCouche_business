import { UserService } from "../Service/userService";
import { userAdd, userGetOne, userDelete, userUpdate } from "../DTO/UserDTO";
import { Request, Response } from "express";
import Joi from "joi";
export class UserController {
  constructor(private service: UserService) {}

  async createUser(req: Request, res: Response) {
    try {
      const DTO: userAdd = {
        name: req.body.name,
        surname: req.body.surname,
        pseudo: req.body.pseudo,
      };

      const verif = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        pseudo: Joi.string().required(),
      });

      console.log("verif joi " + verif.validate(DTO).error);

      if (verif.validate(DTO).error) {
        return res
          .status(400)
          .json({ err: "Erreur sur les attributs passés par la requête post" });
      }
      const user = await this.service.addUser(DTO);

      return res.status(201).json(user);
    } catch (e) {
      return res.sendStatus(500);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const DTO: userGetOne = {
        userId: req.params.userId,
      };
      return res.status(200).json(await this.service.fetchOne(DTO));
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const DTO: userUpdate = {
        id: req.body.userid,
        pseudo: req.body.pseudo,
        name: req.body.name,
        surname: req.body.surname,
      };
      return res.status(200).json(await this.service.updateUser(DTO));
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getAllUser(res: Response) {
    try {
      const users = await this.service.fetchAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.sendStatus(500);
    }
  }
}
