import { UserRepository } from "../Repository/userRepository";
import { userAdd, userGetOne, userDelete, userUpdate } from '../DTO/UserDTO';
import { Request, Response } from 'express'

export class UserController {
  constructor(private repository: UserRepository) {}

  async createUser(req:Request, res:Response) {
      try{
        const DTO:userAdd ={
          name:req.body.name,
          surname: req.body.surname,
          pseudo: req.body.pseudo
        }

        this.repository.addUser(DTO)
      }catch(e){
        res.sendStatus(500);
      }
  }
  async getUser(req:Request, res:Response){
    try {
      const DTO:userGetOne = {
        userId:req.body.userId
      };
      this.repository.fetchOne(DTO);
    }catch(e){
      res.sendStatus(500);
    }
  }
  async updateUser(req:Request, res:Response){
    try{
      const DTO: userUpdate = {
        id: req.body.userid,
        pseudo:req.body.pseudo,
        name: req.body.name,
        surname: req.body.surname
      };
      this.repository.updateUser(DTO);
    }catch(e){
      res.sendStatus(500);
    }
  }
  async getAllUser(res:Response){
    try{
      res.json(this.repository.fetchAll());
    }catch(e){
      res.sendStatus(500);
    }
  }
}
