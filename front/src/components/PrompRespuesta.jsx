/* eslint-disable react/prop-types */
import "../styles/PrompRespuesta.css";

const Modal = ({ mensaje, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <p>{mensaje}</p>
      <button onClick={onClose}>Aceptar</button>
    </div>
  </div>
);

export default Modal;
