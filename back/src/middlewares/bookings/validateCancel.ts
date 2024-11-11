import { Request, Response, NextFunction } from "express";
import { getBookingByIdService } from "../../services/bookingService";

export const verifyCancellationWindow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookingId = req.params.id;

  try {
    console.log(`Verificando cancelación para bookingId: ${bookingId}`);

    const booking = await getBookingByIdService(Number(bookingId));
    if (!booking) {
      console.log("Reserva no encontrada");
      return res.status(404).json({ mensaje: "Reserva no encontrada" });
    }

    const bookingDate = new Date(booking.date);
    const [hours, minutes] = booking.time.split(":").map(Number);

   
    bookingDate.setUTCHours(hours, minutes, 0, 0);

    const now = new Date();
    const diffInHours =
      (bookingDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    console.log(`Diferencia en horas: ${diffInHours}`);

    if (diffInHours < 24) {
      console.log("No puedes cancelar con menos de 24 horas de anticipación");
      return res
        .status(401)
        .json({
          mensaje: "No puedes cancelar con menos de 24 horas de anticipación",
        });
    }

    console.log("Cancelación permitida, continuando...");
    next();
  } catch (error) {
    console.error("Error al verificar la ventana de cancelación:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
