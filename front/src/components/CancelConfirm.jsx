/* eslint-disable react/prop-types */
import "../styles/MisReservas.css";

const CancelConfirm = ({ onClose, onConfirm }) => (
  <div className="modal">
    <div className="modal-content">
      <p>¿Está seguro de que desea cancelar la reserva?</p>
      <button onClick={onClose}>No quiero cancelar</button>
      <button onClick={onConfirm}>Sí, quiero cancelar</button>
    </div>
  </div>
);

export default CancelConfirm;
