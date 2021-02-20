import UserSchema from "../bdd/Schema/UserEntity";
import { User } from "../Entity/User";
import { userAdd, userDelete, userGetOne, userUpdate } from "../DTO/UserDTO";

export class UserRepository {
  constructor() {}

  async createUser(DTO: userAdd): Promise<User> {
    const user = new UserSchema({
      name: DTO.name,
      surname: DTO.surname,
      pseudo: DTO.pseudo,
    });

    const save = await user.save();
    const result = new User(save._id, save.name, save.surname, save.rooms);

    return result;
  }

  async getUsers(): Promise<Array<User>> {
    let userList: Array<User> = [];

    const users = await UserSchema.find();

    for (const userR of users) {
      userList.push(
        new User(userR._id, userR.name, userR.surname, userR.rooms)
      );
    }
    return userList;
  }

  async getUser(DTO: userGetOne): Promise<User> {
    const userR = await UserSchema.findOne({ _id: DTO.userId });

    const result = new User(
      userR?._id!,
      userR?.name!,
      userR?.surname!,
      userR?.pseudo!
    );

    return result;
  }

  async updateUser(DTO: userUpdate): Promise<User> {
    const userUpdate = await UserSchema.updateOne(
      { _id: DTO.id },
      { name: DTO.name, surname: DTO.surname, pseudo: DTO.pseudo }
    );
    const result = new User(
      userUpdate._id,
      userUpdate.name,
      userUpdate.surname,
      userUpdate.rooms
    );
    return result;
  }
  async deleteUser(DTO: userDelete): Promise<User> {
    const deleteUser = await UserSchema.deleteOne({ _id: DTO.id });

    const result = new User(
      deleteUser._id,
      deleteUser.name,
      deleteUser.surname,
      deleteUser.rooms
    );

    return result;
  }
}
