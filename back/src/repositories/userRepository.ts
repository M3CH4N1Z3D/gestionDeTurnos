import { AppDataSource } from "../config/data-souce";
import { User } from "../entities/user";


export const userRepository = AppDataSource.getRepository(User);