import { userGetOne, userAdd, userUpdate, userDelete } from "../DTO/UserDTO";
import { UserRepository } from "../Repository/userRepository";

export class UserService {
  constructor(private repo: UserRepository) {}

  async fetchOne(DTO: userGetOne) {
    return await this.repo.getUser(DTO);
  }

  async fetchAll() {
    return await this.repo.getUsers();
  }

  async addUser(DTO: userAdd) {
    return await this.repo.createUser(DTO);
  }

  async updateUser(DTO: userUpdate) {
    return await this.repo.updateUser(DTO);
  }

  async deleteUser(DTO: userDelete) {
    return await this.repo.deleteUser(DTO);
  }
}
