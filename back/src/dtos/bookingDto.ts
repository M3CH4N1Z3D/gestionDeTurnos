export enum BookingStatus {
  active = "Activa",
  cancelled = "Cancelada",
}

export class bookingDTO {
  date: Date;
  time: string;
  userId: number;
  status: BookingStatus;
  constructor(date: Date, time: string, userId: number, status: BookingStatus) {
    this.date = date;
    this.time = time;
    this.userId = userId;
    this.status = status;
  }
}
