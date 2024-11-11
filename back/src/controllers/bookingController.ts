import { Request, Response } from "express";
import {
  getAllBookingService,
  getBookingByIdService,
  newBookingService,
  cancelABookingService,
} from "../services/bookingService";
import { bookingDTO } from "../dtos/bookingDto";

export const getAllBookingController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookings: bookingDTO[] = await getAllBookingService();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    res.status(500).json({ mensaje: "Error al obtener las reservas" });
  }
};

export const getBookingByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  try {
    const booking = await getBookingByIdService(id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ mensaje: "Reserva no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener la reserva", error);
    if (error instanceof Error) {
      res.status(500).json({ mensaje: error.message });
    } else {
      res
        .status(500)
        .json({ mensaje: "Error desconocido al obtener la reserva" });
    }
  }
};

export const newBookingController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { date, time, userId } = req.body;
  try {
    const newBooking = await newBookingService(date, time, userId);
    if (newBooking) {
      res.status(201).json({
        mensaje: "Tu reserva ha sido confirmada",
        bookingRes: newBooking,
      });
    } else {
      res.status(400).json({ mensaje: "No se pudo hacer la reserva" });
    }
  } catch (error) {
    console.error("Error al generar la reserva:", error);
    if (error instanceof Error) {
      res.status(500).json({ mensaje: error.message });
    } else {
      res
        .status(500)
        .json({ mensaje: "Error desconocido al generar la reserva" });
    }
  }
};

export const cancelABookingController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const bookingId = req.params.id;
  try {
    const cancelledBooking = await cancelABookingService(Number(bookingId));
    if (cancelledBooking) {
      res.status(200).json({
        mensaje: "Reserva cancelada exitosamente",
        booking: cancelledBooking,
      });
    } else {
      res.status(404).json({ mensaje: "Reserva no encontrada" });
    }
  } catch (error) {
    console.error("Error al cancelar la reserva:", error);
    if (error instanceof Error) {
      res.status(500).json({ mensaje: error.message });
    } else {
      res
        .status(500)
        .json({ mensaje: "Error desconocido al cancelar la reserva" });
    }
  }
};
