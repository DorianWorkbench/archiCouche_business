import { Room } from "./Room";
import { User } from "./User";

export class Transaction {
  constructor(
    private id: string,
    private name: string,
    private amount: number,
    private user: User,
    private room: Room
  ) {}
  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getAmount() {
    return this.amount;
  }
  get getUser() {
    return this.user;
  }
  get getRoom() {
    return this.room;
  }
}
