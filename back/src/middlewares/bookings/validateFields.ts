import { Request, Response, NextFunction } from "express";

export const validateBookingFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, time, userId } = req.body;

  if (!date || !time || !userId) {
    return res
      .status(400)
      .json({ mensaje: "Todos los campos son obligatorios" });
  }
  next();
};
