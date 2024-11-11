import { useEffect, useState } from "react";
import "../styles/Galery.css";
import imagen1 from "../assets/Galery/imagen1.jpg";
import imagen2 from "../assets/Galery/imagen2.jpeg";
import imagen3 from "../assets/Galery/imagen3.jpeg";
import imagen4 from "../assets/Galery/imagen4.jpeg";

const images = [imagen1, imagen2, imagen3, imagen4];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + direction + images.length) % images.length
    );
  };

  return (
    <div>
      <div className="gallery" onClick={toggleModal}>
        <img
          src={images[currentImageIndex]}
          alt="Gallery"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={toggleModal}>&times;</span>
          <button onClick={() => changeImage(-1)}>Prev</button>
          <img className="imagen" src={images[currentImageIndex]} alt="Gallery Modal" />
          <button onClick={() => changeImage(1)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;