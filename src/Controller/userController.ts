import { UserRepository } from "../Repository/userRepository";
import { userAdd, userGetOne, userDelete, userUpdate } from '../DTO/UserDTO';
export class UserController {
  constructor(private repository: UserRepository) {}

  async createUser(req: Request, res: Response) {
      try{
          
        this.repository.addUser(DTO)
      }
  }
}
