import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Credential } from "../entities/credential";
import { Booking } from "../entities/booking";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "G0l14th903",
  database: "bookingManagement",
  synchronize: true,
  logging: false,
  entities: [User, Credential, Booking],
  subscribers: [],
  migrations: [],
  // dropSchema: true
});
