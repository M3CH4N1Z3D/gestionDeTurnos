import { useState } from "react";
import "../styles/FormularioContacto.css";

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="contacto-container">
      <h1 className="contacto-titulo">Contacto</h1>
      <form className="contacto-formulario" onSubmit={handleSubmit}>
        {["nombre", "email", "mensaje"].map((field, index) => (
          <label key={index}>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            {field !== "mensaje" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={
                  field === "email"
                    ? "ejemplo@correo.com"
                    : `Ingresa tu ${field}`
                }
                pattern={field === "nombre" ? "[A-Za-z\\s]+" : undefined}
                required
              />
            ) : (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí"
                maxLength="250"
                required
              />
            )}
          </label>
        ))}
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
