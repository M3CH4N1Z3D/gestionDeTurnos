import {
  bookingRepository,
  userRepository,
} from "../repositories/repositories";
import { BookingStatus } from "../interfaces/IBooking";
import { bookingDTO } from "../dtos/bookingDto";
import { Booking } from "../entities/booking";

export const getAllBookingService = async (): Promise<bookingDTO[]> => {
  try {
    return await bookingRepository.find({ relations: { user: true } });
  } catch (error) {
    console.error("Error al obtener todas las reservas:", error);
    throw new Error("Error al obtener las reservas");
  }
};

export const getBookingByIdService = async (
  id: number
): Promise<bookingDTO | null> => {
  try {
    const booking = await bookingRepository.findOneBy({ id });
    return booking || null;
  } catch (error) {
    console.error("Error al obtener los detalles de la reserva", error);
    throw error;
  }
};

export const newBookingService = async (
  date: Date,
  time: string,
  userId: number
): Promise<bookingDTO | undefined> => {
  const newBooking = new Booking(date, time, userId, BookingStatus.active);
  try {
    const savedBooking = await bookingRepository.save(newBooking);
    return savedBooking;
  } catch (error) {
    console.error("Error al guardar la reserva:", error);
    throw error;
  }
};

export const cancelABookingService = async (
  bookingId: number
): Promise<bookingDTO | undefined> => {
  try {
    const booking = await bookingRepository.findOneBy({ id: bookingId });
    if (!booking) {
      throw new Error("La reserva no existe");
    }
    booking.status = BookingStatus.cancelled;
    await bookingRepository.save(booking);
    return booking;
  } catch (error) {
    console.error("Error al cancelar la reserva:", error);
    throw error; 
  }
};
