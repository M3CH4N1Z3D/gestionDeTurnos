import { Request, Response, NextFunction } from "express";
import { bookingRepository } from "../../repositories/repositories";
import { BookingStatus } from "../../dtos/bookingDto";

export const validateBookingDate = async (req: Request, res: Response, next: NextFunction) => {
  const { date, userId } = req.body;

  try {
    const existingBookings = await bookingRepository.find({
      where: { userId, date },
    });

    const hasActiveBooking = existingBookings.some(booking => booking.status === BookingStatus.active);

    if (hasActiveBooking) {
      return res.status(400).json({ mensaje: "No se pueden generar dos reservas el mismo dia" });
    }

    next();
  } catch (error) {
    console.error("Error al validar la fecha de reserva:", error);
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
};