export class User {
  constructor(
    private id: string,
    private name: string,
    private surname: string,
    private rooms: any
  ) {
    this.rooms = [];
  }

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getSurname(): string {
    return this.surname;
  }
  getRooms(): Array<any> {
    return this.rooms;
  }
}
