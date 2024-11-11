/* eslint-disable react/prop-types */
import Cabezote from "../components/Cabezote";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Galery from "../components/Galery";
import AboutUs from "../components/AboutUs";
import RedesSociales from "../components/RedesSociales";
import "./InicioView.css"; 

const AboutUsView = ({ onNavClick, userName }) => (
  <div className="inicio">
    <Cabezote userName={userName} />
    <NavBar onNavClick={onNavClick} />
    <div className="main-content">
      <div className="left-column">
        <Galery />
      </div>
      <div className="center-column">
        <AboutUs />
      </div>
      <div className="right-column">
        <RedesSociales />
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutUsView;