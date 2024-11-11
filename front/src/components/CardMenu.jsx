/* eslint-disable react/prop-types */
import "../styles/Menu.css";

const CardMenu = ({ image, text, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={image} alt={text} />
    <p>{text}</p>
  </div>
);

export default CardMenu;
