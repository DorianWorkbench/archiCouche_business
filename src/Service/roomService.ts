import { CreateRoomDTO } from "../DTO/RoomDTO";
import { userGetOne } from "../DTO/UserDTO";
import { RoomRepository } from "../Repository/roomRepository";

export class RoomService {
  constructor(private repo: RoomRepository) {}

  async createRoom(DTO: CreateRoomDTO, DTOuser: userGetOne) {
    return await this.repo.createRoom(DTO, DTOuser);
  }
}
