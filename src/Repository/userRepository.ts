import UserSchema from "../bdd/Schema/UserEntity";
import { userAdd, userDelete, userGetOne, userUpdate } from "../DTO/UserDTO";

export class UserRepository {
  constructor() {}

  async createUser(DTO: userAdd): Promise<any> {
    const user = new UserSchema({
      name: DTO.name,
      surname: DTO.surname,
      pseudo: DTO.pseudo,
    });
    return await user.save();
  }

  async getUsers(): Promise<any> {
    return await UserSchema.find();
  }

  async getUser(DTO: userGetOne): Promise<any> {
    return await UserSchema.findOne({ _id: DTO.userId });
  }
  async updateUser(DTO: userUpdate): Promise<any> {
    return await UserSchema.updateOne(
      { _id: DTO.id },
      { name: DTO.name, surname: DTO.surname, pseudo: DTO.pseudo }
    );
  }
  async deleteUser(DTO: userDelete): Promise<any> {
    return await UserSchema.deleteOne({ _id: DTO.id });
  }
}
