import { IUser } from "../interfaces/IUser";
import {ICredential} from "../interfaces/ICredentials";
import { IBooking,BookingStatus } from "../interfaces/IBooking";

export const credentials: ICredential[] = [];

export const users: IUser[] = [
    { id: 1, 
        name: 'Juan Pérez', 
        email:"mail@email.com", 
        nDni:30456789, 
        birthdate: new Date('1990-01-01'), 
        credentials: 123456 
    },
];

export const bookings: IBooking[]=[{
    id: 1,
    date: new Date('2023-10-01'),
    time: '14:30',
    userId: 1,
    status: BookingStatus.active,
},]



