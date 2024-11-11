import PropTypes from "prop-types";
import "../styles/Cabezote.css";
import logo from "../assets/logo.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/userSlice";

const Cabezote = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.details);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:8080/users/logout", {
        userId: userData.id,
      });
      if (response.status === 200) {
        dispatch(logoutUser());
        alert("Sesión cerrada correctamente");
      } else {
        throw new Error("No se pudo cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="cabezote">
      <div className="logo">
        <img className="logo-imagen" src={logo} alt="COCINA INTERNACIONAL" />
      </div>
      <div className="restaurant-name">RESTAURANTE COCINA INTERNACIONAL</div>
      <div className="info-user">
        <div className="user">
          Usuario:{" "}
          <span className="user-name">{userData?.name || "Invitado"}</span>
        </div>
        <div className="user-image">Aquí va la imagen de usuario</div>
        <div className="close-sesion" onClick={handleLogout}>
          Cerrar Sesión
        </div>
      </div>
    </div>
  );
};

Cabezote.propTypes = {
  userName: PropTypes.string,
};

export default Cabezote;
