import { Request, Response, NextFunction } from "express";
import { userRepository } from "../../repositories/repositories";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;

  // Verificar si userId está presente
  if (!userId) {
    return res.status(400).json({ mensaje: "El ID de usuario es obligatorio" });
  }

  try {
    // Buscar el usuario en la base de datos
    const user = await userRepository.findOne({ where: { id: userId } });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no existe" });
    }

    // Verificar si el usuario está logueado
    if (!user.loginOn) {
      return res.status(401).json({ mensaje: "Sesión no iniciada" });
    }

    next(); // Llamar al siguiente middleware o controlador si todas las validaciones pasan
  } catch (error) {
    console.error("Error al validar el usuario:", error);
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
};
