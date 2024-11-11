/* eslint-disable react/prop-types */
import Cabezote from "../components/Cabezote";
import NavBar from "../components/NavBar";
import Galery from "../components/Galery";
import Mapa from "../components/Mapa";
import SearchBar from "../components/Searchbar";
import SingInButton from "../components/SingInButton";
import LogInButton from "../components/LogInButton";
import Footer from "../components/Footer";
import "./InicioView.css";

const InicioView = ({ onNavClick, userName }) => (
  <div className="inicio">
    <Cabezote userName={userName} />
    <NavBar onNavClick={onNavClick} />
    <div className="main-content">
      <div className="left-column">
        <Galery />
      </div>
      <div className="center-column">
        <Mapa />
      </div>
      <div className="right-column">
        <SearchBar />
        <SingInButton />
        <LogInButton />
      </div>
    </div>
    <Footer />
  </div>
);

export default InicioView;
