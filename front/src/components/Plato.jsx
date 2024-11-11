/* eslint-disable react/prop-types */
import '../styles/Plato.css';

const Plato = ({ imageSrc, description }) => (
  <div className="plato-container">
    <img src={imageSrc} alt="Plato" className="imagen-plato" />
    <p className="descripcion-plato">{description}</p>
  </div>
);

export default Plato;