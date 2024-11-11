import "../styles/Menu.css";
import CardMenu from "./CardMenu";
import { images as items } from "../assets/Banderas/importBanderas";

const Menu = () => {
  const handleCardClick = (id) => {
    console.log(`Navegando a la página del elemento con ID: ${id}`);
  };

  return (
    <div className="menu-container">
      <h2>Menú</h2>
      <div className="menu-grid">
        {items.map(({ id, image, text }) => (
          <CardMenu
            key={id}
            image={image}
            text={text}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
