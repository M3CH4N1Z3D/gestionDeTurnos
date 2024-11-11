/* eslint-disable react/prop-types */
import Cabezote from "../components/Cabezote";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MisReservas from "../components/MisReservas";
import "./ContactView.css";

const MisReservasView = ({ onNavClick }) => (
  <div className="inicio">
    <Cabezote />
    <NavBar onNavClick={onNavClick} />
    <div className="main-content">
      <MisReservas />
    </div>
    <Footer />
  </div>
);

export default MisReservasView;
