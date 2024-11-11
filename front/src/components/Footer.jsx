const Footer = () => (
  <footer style={footerStyle}>
    © Fredy Rigueros 2024
  </footer>
);

const footerStyle = {
  width: '100%',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  fontSize: '0.8rem',
  color: '#000',
  opacity: 0.5,
};

export default Footer;