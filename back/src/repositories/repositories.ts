
import { AppDataSource } from "../config/data-souce";
import { Booking } from "../entities/booking";
import { User } from "../entities/user";
import { Credential } from "../entities/credential";
export const bookingRepository = AppDataSource.getRepository(Booking);


export const userRepository = AppDataSource.getRepository(User);

export const credentialRepository = AppDataSource.getRepository(Credential);
