import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Duncan Hamelin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;