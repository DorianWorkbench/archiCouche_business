import { CreateRoomDTO } from "../DTO/RoomDTO";
import { userGetOne, userUpdate } from "../DTO/UserDTO";
import { RoomRepository } from "../Repository/roomRepository";

export class RoomService {
  constructor(private repo: RoomRepository) {}

  async createRoom(
    DTO: CreateRoomDTO,
    DTOuser: userGetOne,
    DTOuserUpdate: userUpdate
  ) {
    return await this.repo.createRoom(DTO, DTOuser, DTOuserUpdate);
  }
}
