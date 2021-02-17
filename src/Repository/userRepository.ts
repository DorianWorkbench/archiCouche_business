import UserSchema from "../bdd/Schema/UserEntity";
import { userGetOne, userAdd, userUpdate, userDelete } from "../DTO/UserDTO";

export class UserRepository {
  async fetchOne(DTO: userGetOne) {
    UserSchema.findOne({ _id: DTO.userId }).then((user) => {
      return user;
    });
  }

  async fetchAll() {
    UserSchema.find().then((users) => {
      return users;
    });
  }

  async addUser(DTO: userAdd) {
    const user = new UserSchema({
      name: DTO.name,
      surname: DTO.surname,
      pseudo: DTO.pseudo,
    });
    user.save().then((user) => {
      return user;
    });
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
