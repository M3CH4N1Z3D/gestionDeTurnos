import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/userSlice";
import "../styles/FormularioDeLogIn.css";
import MensajeExito from "./MensajeExito";
import axios from "axios";

const FormularioDeLogIn = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [mensajeExito, setMensajeExito] = useState(null);
  const [mensajeError, setMensajeError] = useState(null);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormComplete = () =>
    Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        formData
      );
      if (response.status === 200) {
        const { mensaje, userId } = response.data;
        setMensajeExito(mensaje);
        dispatch(loginUser({ name: userId.userName, id: userId.userId }));
        setUserId(userId.userId);
      }
    } catch (error) {
      setMensajeError("Datos incorrectos. Intente de nuevo");
      console.error(error);
    }
  };

  const handleCancel = () => setFormData({ userName: "", password: "" });
  
  

  return (
    <div className="login-container">
      <h1 className="login-titulo">Inicia Sesión</h1>
      <form className="login-formulario" onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            pattern="[A-Za-z0-9]+"
            title="Letras y números sin caracteres especiales"
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="4"
            maxLength="20"
            required
          />
        </label>
        <button
          type="submit"
          className="boton-iniciar-sesion"
          disabled={!isFormComplete()}
        >
          Iniciar Sesión
        </button>
        <button type="button" className="boton-cancelar" onClick={handleCancel}>
          Cancelar
        </button>
      </form>
      {mensajeExito && (
        <MensajeExito
          mensaje={mensajeExito}
          userId={userId}
          onAceptar={() => setMensajeExito(null)}
        />
      )}
      {mensajeError && <div className="mensaje-error">{mensajeError}</div>}
    </div>
  );
};

export default FormularioDeLogIn;
