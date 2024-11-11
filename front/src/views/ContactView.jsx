/* eslint-disable react/prop-types */
import Cabezote from "../components/Cabezote";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";
import "./ContactView.css";

const ContactView = ({ onNavClick, userName }) => (
  <div className="inicio">
    <Cabezote userName={userName} />
    <NavBar onNavClick={onNavClick} />
    <div className="main-content">
      <FormularioContacto />
    </div>
    <Footer />
  </div>
);

export default ContactView;
