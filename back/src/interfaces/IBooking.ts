export enum BookingStatus {
  active = "Activa",
  cancelled = "Cancelada",
}

export interface IBooking {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: BookingStatus;
}
