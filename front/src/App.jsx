import { Routes, Route } from "react-router-dom";
import "./App.css";
import InicioView from "./views/InicioView";
import MenuView from "./views/MenuView";
import ReservasView from "./views/ReservasView";
import AboutUsView from "./views/AboutUsView";
import ContactView from "./views/ContactView";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<InicioView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/reservas" element={<ReservasView />} />
        <Route path="/contacto" element={<ContactView />} />
        <Route path="/about" element={<AboutUsView />} />
      </Routes>
    </UserProvider>
  );
}

export default App;