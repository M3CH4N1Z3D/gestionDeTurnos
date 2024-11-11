import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./credential";
import { Booking } from "./booking";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  birthdate: Date;
  @Column()
  nDni: number;
  @Column({ default: false })
  loginOn: boolean;
  @OneToOne(() => Credential, (credential) => credential.user, {
    cascade: true,
  })
  @JoinColumn()
  credentials: Credential;
  @OneToMany(() => Booking, (booking) => booking.user, { cascade: true })
  bookings: Booking[];
}
