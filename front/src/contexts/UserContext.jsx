/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({name: "Invitado"});
  const [bookings, setBookings] = useState([]); 

  return (
    <UserContext.Provider value={{ userData, setUserData, bookings, setBookings }}>
      {children}
    </UserContext.Provider>
  );
};