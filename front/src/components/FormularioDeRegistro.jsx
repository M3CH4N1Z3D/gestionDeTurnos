import { useState } from "react";
import "../styles/FormularioDeRegistro.css";
import MensajeExito from "./MensajeExito";
import axios from "axios";

const initialFormData = {
  name: "",
  apellido: "",
  email: "",
  fechaNacimiento: "",
  tipoDocumento: "DNI",
  numeroDocumento: "",
  nombreUsuario: "",
  contraseña: "",
};

const FormularioDeRegistro = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [mensajeExito, setMensajeExito] = useState(null);
  const [mensajeError, setMensajeError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormComplete = () =>
    Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      name: `${formData.name} ${formData.apellido}`,
      email: formData.email,
      birthdate: new Date(formData.fechaNacimiento),
      nDni: parseInt(formData.numeroDocumento, 10),
      userName: formData.nombreUsuario,
      password: formData.contraseña,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        formattedData
      );
      if (response.status === 201) {
        setMensajeExito(response.data.mensaje);
        setMensajeError(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensajeError(error.response?.data?.mensaje || error.message);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setMensajeError(null);
  };

  const handleAceptar = () => {
    setMensajeExito(null);
    setIsFormVisible(false);
  };

  return (
    isFormVisible && (
      <div className="registro-container">
        <h1 className="registro-titulo">¡Regístrate!</h1>
        <p className="registro-subtitulo">
          Y obtén un 10% de descuento en tu próxima visita
        </p>
        <form className="registro-formulario" onSubmit={handleSubmit}>
          {[
            {
              label: "Nombre",
              name: "name",
              type: "text",
              pattern: "[A-Za-z]+",
            },
            {
              label: "Apellido",
              name: "apellido",
              type: "text",
              pattern: "[A-Za-z]+",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
            },
            {
              label: "Fecha de nacimiento",
              name: "fechaNacimiento",
              type: "date",
            },
            {
              label: "Número de documento",
              name: "numeroDocumento",
              type: "number",
              pattern: "\\d+",
            },
            {
              label: "Nombre de usuario",
              name: "nombreUsuario",
              type: "text",
              pattern: "[A-Za-z0-9]+",
            },
            {
              label: "Contraseña",
              name: "contraseña",
              type: "password",
              minLength: 4,
              maxLength: 8,
            },
          ].map(({ label, ...inputProps }, index) => (
            <label key={index}>
              {label}:
              <input
                {...inputProps}
                value={formData[inputProps.name]}
                onChange={handleChange}
                required
              />
            </label>
          ))}
          <button
            type="submit"
            className="boton-confirmar"
            disabled={!isFormComplete()}
          >
            Confirmar
          </button>
          <button type="button" className="boton-limpiar" onClick={handleReset}>
            Limpiar
          </button>
        </form>
        {mensajeError && <p className="error-message">{mensajeError}</p>}
        {mensajeExito && (
          <MensajeExito mensaje={mensajeExito} onAceptar={handleAceptar} />
        )}
      </div>
    )
  );
};

export default FormularioDeRegistro;
