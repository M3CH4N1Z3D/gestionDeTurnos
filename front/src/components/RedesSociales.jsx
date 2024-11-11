import '../styles/RedesSociales.css';
import facebookLogo from '../assets/facebook.png';
import tiktokLogo from '../assets/tiktok.png';
import instagramLogo from '../assets/instagram.png';
import whatsappLogo from '../assets/whatsapp.png';
import xLogo from '../assets/x.png';
import telegramLogo from '../assets/telegram.png';

const socialMedia = [
  { src: facebookLogo, alt: "Facebook" },
  { src: tiktokLogo, alt: "TikTok" },
  { src: instagramLogo, alt: "Instagram" },
  { src: whatsappLogo, alt: "WhatsApp" },
  { src: xLogo, alt: "X" },
  { src: telegramLogo, alt: "Telegram" },
];

const RedesSociales = () => (
  <div className="redes-sociales-container">
    <h2 className="redes-sociales-titulo">Nuestras Redes Sociales</h2>
    <div className="redes-sociales-grid">
      {socialMedia.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} className="social-logo" />
      ))}
    </div>
  </div>
);

export default RedesSociales;