const Mapa = () => {
  const url =
    "https://www.google.com/maps/place/Cocina+Internacional/@4.6342109,-74.1380447,13z/data=!4m6!3m5!1s0x8e3f9a575b231e5d:0xd7ca8af1421495e6!8m2!3d4.6342109!4d-74.0636442!16s%2Fg%2F11b6j0s9p8";

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer", width: "fit-content" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63628.397830523696!2d-74.13804467118015!3d4.6342109021439395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a575b231e5d%3A0xd7ca8af1421495e6!2sCocina%20Internacional!5e0!3m2!1ses!2sco!4v1725082567077!5m2!1ses!2sco"
        width="300"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Cocina Internacional"
      ></iframe>
    </div>
  );
};

export default Mapa;
