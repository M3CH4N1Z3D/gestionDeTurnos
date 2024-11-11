import { Router } from "express";
import {
  getAllBookingController,
  getBookingByIdController,
  newBookingController,
  cancelABookingController,
} from "../controllers/bookingController";
import { validateTime } from "../middlewares/bookings/validateTime";
import { validateBookingFields } from "../middlewares/bookings/validateFields";
import { validateUser } from "../middlewares/bookings/validateUser";
import { validateBookingDate } from "../middlewares/bookings/validateDate";
import { verifyCancellationWindow } from "../middlewares/bookings/validateCancel";

const bookingsRouter: Router = Router();

bookingsRouter.get("/", getAllBookingController);
bookingsRouter.get("/:id", getBookingByIdController);
bookingsRouter.post("/schedule",
  validateUser, //Validacion que llegó el id de usuario, que el usuario existe y que esta logueado.
  validateBookingFields,//Validacion que todos los campos para la reserva son correctos.
  validateTime,//Validacion que la resaerva es para un horario dentro del tiempo de atencion.
  validateBookingDate, // Validacion que el usuario no tienes ya reservas para un mismo dia.
  newBookingController
);
bookingsRouter.post("/");
bookingsRouter.put("/:id",verifyCancellationWindow, cancelABookingController);
bookingsRouter.delete("/");

export default bookingsRouter;
