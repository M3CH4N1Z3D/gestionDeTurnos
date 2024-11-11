import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookingStatus } from "../dtos/bookingDto";
import { User } from "./user";

@Entity({ name: "bookings" })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @Column()
  time: string;
  @Column()
  userId: number;
  @ManyToOne(() => User, (user) => user.bookings)
  user: User;
  @Column({
    type: "enum",
    enum: BookingStatus,
  })
  status: BookingStatus;

  constructor(date: Date, time: string, userId: number, status: BookingStatus) {
    this.date = date;
    this.time = time;
    this.userId = userId;
    this.status = status;
  }
}
