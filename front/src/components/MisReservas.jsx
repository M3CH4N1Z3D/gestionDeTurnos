import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBookings } from "../slices/bookingSlice";
import "../styles/MisReservas.css";
import CancelConfirm from "./CancelConfirm";
import axios from "axios";

const MisReservas = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.details);
  const bookings = useSelector((state) => state.booking.bookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/users/${id}`)
        .then((response) => dispatch(setBookings(response.data.bookings)))
        .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [dispatch, id]);

  const handleCancelBooking = (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowModal(true);
  };

  const confirmCancelBooking = () => {
    axios
      .put(`http://localhost:8080/booking/${selectedBookingId}`, {}, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200) {
          const updatedBookings = bookings.map((booking) =>
            booking.id === selectedBookingId
              ? { ...booking, status: response.data.booking.status }
              : booking
          );
          dispatch(setBookings(updatedBookings));
          setShowModal(false);
        } else {
          throw new Error("Error al cancelar la reserva");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const formatDate = (dateString) => new Date(dateString).toISOString().split('T')[0];

  return (
    <div className="mis-reservas-container">
      <h1 className="mis-reservas-titulo">Mis Reservas</h1>
      <div className="mis-reservas-content">
        {bookings.length === 0 ? (
          <p>Aun no tienes reservas agendadas</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="reserva-item">
              <div className="informacion-reserva">
                Fecha: {formatDate(booking.date)} <br />
                Hora: {booking.time}
              </div>
              <div className="status">
                Estado: {booking.status}
              </div>
              <button
                className="cancelar-reserva"
                onClick={() => handleCancelBooking(booking.id)}
                disabled={booking.status === "Cancelada"}
              >
                Cancelar
              </button>
            </div>
          ))
        )}
      </div>
      {showModal && (
        <CancelConfirm
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={confirmCancelBooking}
        />
      )}
    </div>
  );
};

export default MisReservas;