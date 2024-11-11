import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({ name: "credentials" })
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  password: string;
  @OneToOne(() => User, (user) => user.credentials)
  user: User;
}
