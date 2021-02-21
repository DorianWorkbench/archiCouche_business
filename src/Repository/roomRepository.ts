import RoomSchema from "../bdd/Schema/SalonEntity";
import { CreateRoomDTO } from "../DTO/RoomDTO";
import { userGetOne, userUpdate } from "../DTO/UserDTO";
import { Room } from "../Entity/Room";

import { UserRepository } from "./userRepository";

export class RoomRepository {
  constructor(private repo: UserRepository) {}

  async createRoom(
    DTO: CreateRoomDTO,
    DTOuser: userGetOne,
    DTOuserUpdate: userUpdate
  ): Promise<Room> {
    const cRoom = new RoomSchema();
    cRoom.name = DTO.name;

    // todo: check how to convert string to objectId
    cRoom.users.push(DTOuser.userId);

    const sRoom = await cRoom.save();
    const userToR = await this.repo.getUser(DTOuser);
    const rUser = [userToR];

    DTOuserUpdate.rooms = sRoom._id;
    DTOuserUpdate.name = userToR.getName();
    DTOuserUpdate.surname = userToR.getSurname();
    DTOuserUpdate.pseudo = userToR.getPseudo();

    const updateUser = await this.repo.updateUser(DTOuserUpdate);

    const room = new Room(sRoom._id, sRoom.name, rUser);

    return room;
  }
}
