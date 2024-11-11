/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Cabezote from "../components/Cabezote";
import NavBar from "../components/NavBar";
import FormularioReserva from "../components/FormularioReserva";
import SingInButton from "../components/SingInButton";
import LogInButton from "../components/LogInButton";
import Footer from "../components/Footer";
import MisReservas from "../components/MisReservas";
import "./ReservasView.css";

const ReservasView = ({ onNavClick, userName }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div className="inicio">
      <Cabezote userName={userName} />
      <NavBar onNavClick={onNavClick} />
      <div className="main-content">
        <div className="left-column">
          <FormularioReserva />
        </div>
        <div className="right-column">
          <SingInButton />
          <LogInButton />
          <p>
            Nuestro horario para reservas es de Lunes a Viernes de 03:00 PM a
            11:00 PM.
            <br />
            Puedes Cancelar tu reserva hasta con 24 Horas de antelación.
          </p>
        </div>
      </div>
      {isAuthenticated && <MisReservas />}
      <Footer />
    </div>
  );
};

export default ReservasView;
