import "../styles/SingInButton.css";
import { useState } from "react";
import FormularioDeRegistro from "./FormularioDeRegistro";

const SignInButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button className="sign-in-button" onClick={toggleModal}>
        Registrarse!!
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <FormularioDeRegistro />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInButton;