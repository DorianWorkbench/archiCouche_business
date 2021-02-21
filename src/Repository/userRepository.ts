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
    const result = new User(save._id, save.name, save.surname, save.pseudo);

    return result;
  }

  async getUsers(): Promise<Array<User>> {
    let userList: Array<User> = [];

    const users = await UserSchema.find();

    for (const userR of users) {
      userList.push(
        new User(
          userR._id,
          userR.name,
          userR.surname,
          userR.pseudo,
          userR.rooms
        )
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
      userR?.pseudo!,
      userR?.rooms!
    );

    return result;
  }

  async updateUser(DTO: userUpdate): Promise<User> {
    let userF = await UserSchema.findOne({ _id: DTO.id });

    // Updating user by save mongoose method

    userF!.name = DTO.name!;
    userF!.surname = DTO.surname!;
    userF!.pseudo = DTO.pseudo!;

    // For room update
    if (DTO.rooms) {
      userF!.rooms.push(DTO.rooms!);
    }

    await userF!.save();

    console.log(userF);

    const DTOuser: userGetOne = {
      userId: DTO.id!,
    };

    const result = await this.getUser(DTOuser);

    console.log("after update");
    console.log(result);

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
