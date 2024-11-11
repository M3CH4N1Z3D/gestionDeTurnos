import { bookingDTO } from "./bookingDto";

export class UserDTO {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  userName: string;
  password: string;
  bookings: bookingDTO[];
  loginON: Boolean

  constructor(
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    userName: string,
    password: string,
    bookings: bookingDTO[],
    loginON: Boolean
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
    this.nDni = nDni;
    this.userName = userName;
    this.password = password;
    this.bookings = bookings;
    this.loginON = loginON;
  }
}
