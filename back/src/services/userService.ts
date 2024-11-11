import { newCredentialsService } from "./credentialsService";
import { userRepository } from "../repositories/repositories";
import { User } from "../entities/user";
import { UserDTO } from "../dtos/userDto";

export const getAllUsersService = async (): Promise<UserDTO[]> => {
  try {
    const usersList = await userRepository.find({
      relations: {
        credentials: true,
        bookings: true,
      },
    });
    return usersList.map(
      (user) =>
        new UserDTO(
          user.id,
          user.name,
          user.email,
          user.birthdate,
          user.nDni,
          user.credentials.userName,
          user.credentials.password,
          user.bookings,
          user.loginOn
        )
    );
  } catch (error: unknown) {
    let errorMessage = "No se pudo acceder a la lista de usuarios";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    throw new Error(errorMessage);
  }
};

export const getUserByIdService = async (
  id: number
): Promise<UserDTO | null> => {
  try {
    const user = await userRepository.findOne({
      where: { id },
      relations: {
        credentials: true,
        bookings: true,
      },
    });
    if (!user) {
      throw new Error("Usuario no existe");
    }
    return new UserDTO(
      user.id,
      user.name,
      user.email,
      user.birthdate,
      user.nDni,
      user.credentials.userName,
      user.credentials.password,
      user.bookings,
      user.loginOn
    );
  } catch (error) {
    throw error;
  }
};

export const newUserService = async (
  name: string,
  email: string,
  birthdate: Date,
  nDni: number,
  userName: string,
  password: string
): Promise<UserDTO> => {
  try {
    if (!name || !email || !userName || !password) {
      throw new Error("Todos los campos son obligatorios");
    }
    const credentials = await newCredentialsService(userName, password);
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.nDni = nDni;
    newUser.credentials = credentials;
    await userRepository.save(newUser);
    return new UserDTO(
      newUser.id,
      newUser.name,
      newUser.email,
      newUser.birthdate,
      newUser.nDni,
      newUser.credentials.userName,
      newUser.credentials.password,
      newUser.bookings,
      newUser.loginOn
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
    throw new Error("Error desconocido al crear el usuario");
  }
};
