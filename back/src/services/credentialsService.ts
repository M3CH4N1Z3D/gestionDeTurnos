import {
  credentialRepository,
  userRepository,
} from "../repositories/repositories";
import { Credential } from "../entities/credential";

export const newCredentialsService = async (
  userName: string,
  password: string
): Promise<Credential> => {
  if (!userName || !password) {
    throw new Error("El nombre de usuario y la contraseña son obligatorios");
  }

  const existingCredential = await credentialRepository.findOne({
    where: { userName },
    relations: {
      user: true,
    },
  });
  if (existingCredential) {
    throw new Error("El nombre de usuario ya existe");
  }

  const newCredential = new Credential();
  newCredential.userName = userName;
  newCredential.password = password;

  try {
    await credentialRepository.save(newCredential);
  } catch (error) {
    throw new Error("Error al guardar las credenciales: ${error.message}");
  }

  return newCredential;
};

export const loginUserService = async (
  userName: string,
  password: string
): Promise<{ userId: number, userName: string } | undefined> => {
  try {
    const login = await credentialRepository.findOne({
      where: { userName },
      relations: { user: true },
    });
    if (login && login.password === password) {
      const user = await userRepository.findOne({
        where: { credentials: { id: login.id } },
      });
      if (user) {
        user.loginOn = true;
        await userRepository.save(user);
        return { userId: user.id, userName: user.name };
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al intentar iniciar sesión: ${error.message}`);
    }
    throw new Error("Error desconocido al intentar iniciar sesión");
  }
  return undefined;
};

export const logOutUserService = async (userId: number): Promise<void> => {
  try {
    const user = await userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("Usuario no existe");
    }
    if (!user.loginOn) {
      throw new Error("La sesión ya está cerrada");
    }
    user.loginOn = false;
    await userRepository.save(user);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error desconocido al intentar cerrar sesión");
  }
};
