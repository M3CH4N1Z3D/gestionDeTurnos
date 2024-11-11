import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  userData: { name: "Invitado", id: null },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setBookings, addBooking, setUserData } = bookingSlice.actions;
export default bookingSlice.reducer;