import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  newUserService,
} from "../services/userService";
import {
  loginUserService,
  logOutUserService,
} from "../services/credentialsService";
import { UserDTO } from "../dtos/userDto";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (error) {
    console.error("Error de controlador", error);
    res.status(500).json({ mensaje: (error as Error).message });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: UserDTO | null = await getUserByIdService(Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    if (error instanceof Error) {
      res.status(500).json({ mensaje: error.message });
    } else {
      res
        .status(500)
        .json({ mensaje: "Error desconocido al obtener el usuario" });
    }
  }
};

export const newUserController = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, userName, password } = req.body;
  try {
    const newUser = await newUserService(
      name,
      email,
      new Date(birthdate),
      nDni,
      userName,
      password
    );
    res
      .status(201)
      .json({ mensaje: "Usuario registrado exitosamente", user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ mensaje: error.message });
    } else {
      res
        .status(500)
        .json({ mensaje: "Error desconocido al registrar el usuario" });
    }
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  try {
    const userId = await loginUserService(userName, password);

    if (userId !== undefined) {
      res
        .status(200)
        .json({ mensaje: "Sesión iniciada correctamente", userId: userId });
    } else {
      res.status(400).json({
        mensaje: "Datos incorrectos. Intente de nuevo",
      });
    }
  } catch (error) {
    console.error("Error en el controlador", error);
    if (error instanceof Error) {
      res.status(500).json({ mensaje: error.message });
    } else {
      res.status(500).json({ mensaje: "Error desconocido en el servidor" });
    }
  }
};

export const logOutUserController = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    await logOutUserService(userId);
    res.status(200).json({ mensaje: "Sesión cerrada correctamente" });
  } catch (error) {
    console.error("Error en el controlador de cierre de sesión", error);
    if (error instanceof Error) {
      res.status(400).json({ mensaje: error.message });
    } else {
      res.status(500).json({ mensaje: "Error desconocido al cerrar sesión" });
    }
  }
};
