export class User {
  constructor(
    private id: string,
    private name: string,
    private surname: string,
    private pseudo: string,
    private rooms: Array<String> = []
  ) {}

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
  getPseudo(): string {
    return this.pseudo;
  }
}
