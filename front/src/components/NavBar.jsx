import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const links = [
    { to: "/", label: "HOME" },
    { to: "/menu", label: "MENÚ" },
    { to: "/reservas", label: "RESERVAS" },
    { to: "/contacto", label: "CONTACTO" },
    { to: "/about", label: "ABOUT" } // Nueva ruta añadida
  ];

  return (
    <nav className="nav-bar">
      {links.map(({ to, label }) => (
        <Link key={to} to={to} className="nav-link">
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;