import RoomSchema from "../bdd/Schema/SalonEntity";
import { CreateRoomDTO } from "../DTO/RoomDTO";
import { userGetOne, userUpdate } from "../DTO/UserDTO";
import { Room } from "../Entity/Room";
import { User } from "../Entity/User";
import { UserService } from "../Service/userService";
import { UserRepository } from "./userRepository";

export class RoomRepository {
  constructor(private repo: UserRepository) {}

  async createRoom(DTO: CreateRoomDTO, DTOuser: userGetOne): Promise<Room> {
    const cRoom = new RoomSchema();
    cRoom.name = DTO.name;

    // todo: check how to convert string to objectId
    cRoom.users.push(DTOuser.userId);

    const sRoom = await cRoom.save();

    const rUser = [await this.repo.getUser(DTOuser)];

    const room = new Room(sRoom._id, sRoom.name, rUser);

    return room;
  }
}
