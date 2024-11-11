/* eslint-disable react/prop-types */
import '../styles/MensajeExito.css'; 
import axios from 'axios';

const MensajeExito = ({ mensaje, onAceptar, userId }) => {
  const handleAceptarClick = async () => {
    try {
      onAceptar();
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      if (response.status === 200) {
        console.log('Datos del usuario:', response.data);
      } else {
        throw new Error("Error al obtener los datos del usuario");
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  return (
    <div className="mensaje-exito-container">
      <p className="mensaje-exito-texto">{mensaje}</p>
      <button className="boton-aceptar" onClick={handleAceptarClick}>Aceptar</button>
    </div>
  );
};

export default MensajeExito;