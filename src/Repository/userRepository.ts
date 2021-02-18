import UserSchema from "../bdd/Schema/UserEntity";
import { userGetOne, userAdd, userUpdate, userDelete } from "../DTO/UserDTO";

export class UserRepository {
  async fetchOne(DTO: userGetOne) {
    UserSchema.findOne({ _id: DTO.userId }).then((user) => {
      return user;
    });
  }

  async fetchAll() {
    return await UserSchema.find();
  }

  async addUser(DTO: userAdd) {
    let user = new UserSchema({
      name: DTO.name,
      surname: DTO.surname,
      pseudo: DTO.pseudo,
    });
    return await user.save();
  }

  async updateUser(DTO: userUpdate) {
    UserSchema.updateOne(
      { _id: DTO.id },
      {
        pseudo: DTO.pseudo,
        name: DTO.name,
        surname: DTO.surname,
      }
    );
  }

  async deleteUser(DTO: userDelete) {
    UserSchema.updateOne({ _id: DTO.id }, DTO);
  }
}
