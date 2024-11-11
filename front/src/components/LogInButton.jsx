import "../styles/LogInButton.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import FormularioDeLogin from "./FormularioDeLogin";

const LogInButton = () => {
  const userData = useSelector((state) => state.user.details);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button
        className="log-in-button"
        onClick={toggleModal}
        disabled={userData.name !== "Invitado"}
      >
        Iniciar Sesion
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <FormularioDeLogin onClose={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LogInButton;