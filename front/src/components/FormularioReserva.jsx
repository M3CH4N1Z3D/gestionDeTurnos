import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBooking } from '../slices/bookingSlice';
import '../styles/FormularioReserva.css'; 
import PrompRespuesta from './PrompRespuesta';
import axios from 'axios';

const FormularioReserva = () => {
  const dispatch = useDispatch();
  const { id: userId, name } = useSelector((state) => state.user.details);
  const [formData, setFormData] = useState({ date: '', time: '' });
  const [mensaje, setMensaje] = useState(''); 
  const [showPrompRespuesta, setShowPrompRespuesta] = useState(false);
  const [isWeekend, setIsWeekend] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formData.date) {
      const day = new Date(formData.date).getDay();
      setIsWeekend(day === 5 || day === 6);
    }
  }, [formData.date]);

  const isFormComplete = () => 
    Object.values(formData).every((value) => value.trim() !== "") && !isWeekend;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      console.error('User ID no disponible');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/booking/schedule', {
        ...formData,
        userId,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
      setMensaje(response.data.mensaje);
      dispatch(addBooking(response.data.bookingRes));
    } catch (error) {
      setMensaje("No se pudo realizar la reserva. Revisa la fecha y la hora e intenta de nuevo");
      console.error('Error:', error);
    } finally {
      setShowPrompRespuesta(true);
    }
  };

  const handleReset = () => setFormData({ date: '', time: '' });

  const closePrompRespuesta = () => setShowPrompRespuesta(false);

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const formattedDate = today.toISOString().split("T")[0];

  return (
    <div className="reserva-container">
      <h1 className="reserva-titulo">Realiza tu reserva</h1>
      <form className="reserva-formulario" onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={formattedDate}
            placeholder="aaaa-mm-dd"
          />
        </label>
        <label>
          Hora:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="hh:mm"
          />
        </label>
        <button type="submit" className="boton-reservar" disabled={name === "Invitado" || !isFormComplete()}>Reservar</button>
        <button type="button" className="boton-limpiar" onClick={handleReset}>Limpiar</button>
      </form>
      {showPrompRespuesta && <PrompRespuesta mensaje={mensaje} onClose={closePrompRespuesta} />}
    </div>
  );
};

export default FormularioReserva;