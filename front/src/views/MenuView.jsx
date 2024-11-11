/* eslint-disable react/prop-types */
import Cabezote from "../components/Cabezote";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "./InicioView.css";

const MenuView = ({ onNavClick, userName }) => (
  <div className="inicio">
    <Cabezote userName={userName} />
    <NavBar onNavClick={onNavClick} />
    <div className="main-content menu-center">
      <Menu />
    </div>
    <Footer />
  </div>
);

export default MenuView;
