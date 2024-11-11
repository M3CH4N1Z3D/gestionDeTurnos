import { User } from "../entities/user";

export class credentialDTO {
  id: number| undefined;
  userName: string;
  password: string;
  user:User;
  constructor(id: number|undefined, userName: string, password: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
  }
}
