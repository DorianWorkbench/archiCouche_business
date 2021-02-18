import { UserRepository } from "../Repository/userRepository";
import { userAdd, userGetOne, userDelete, userUpdate } from "../DTO/UserDTO";
import { Request, Response } from "express";

export class UserController {
  constructor(private repository: UserRepository) {}

  async createUser(req: Request, res: Response) {
    try {
      const DTO: userAdd = {
        name: req.body.name,
        surname: req.body.surname,
        pseudo: req.body.pseudo,
      };
      const user = await this.repository.addUser(DTO);
      console.log(user);
      res.status(201).json(user);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const DTO: userGetOne = {
        userId: req.body.userId,
      };
      this.repository.fetchOne(DTO);
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
      this.repository.updateUser(DTO);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getAllUser(res: Response) {
    try {
      const users = await this.repository.fetchAll();
      res.status(200).json(users);
    } catch (e) {
      res.sendStatus(500);
    }
  }
}
