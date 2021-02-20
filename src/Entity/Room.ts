import { Transaction } from "./Transactions";
import { User } from "./User";

export class Room {
  constructor(
    private id: string,
    private name: string,
    private users: Array<User> = [],
    private transactions: Array<Transaction> = []
  ) {}

  get getId() {
    return this.id;
  }
  get getUsers(): Array<User> {
    return this.users;
  }
  get getName(): string {
    return this.name;
  }
  get getTransactions(): Array<Transaction> {
    return this.transactions;
  }
}
