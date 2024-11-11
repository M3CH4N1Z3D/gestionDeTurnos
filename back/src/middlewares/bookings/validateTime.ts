import { Request, Response, NextFunction } from "express";

export const validateTime = (req: Request, res: Response, next: NextFunction) => {
  const { time } = req.body;

  if (!time) {
    return res.status(400).json({ mensaje: "La hora es obligatoria" });
  }

  const [hour, minute] = time.split(':').map(Number);

  if (hour < 15 || hour > 23 || (hour === 23 && minute > 0)) {
    return res.status(400).json({ mensaje: "Fuera del horario de atención" });
  }

  const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  
  req.body.formattedTime = formattedTime;

  next(); 
};