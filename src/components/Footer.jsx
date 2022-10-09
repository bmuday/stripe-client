import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__div">
      <nav className="footer__navbar">
        <Link className="footer__links" to="/terms-of-sales">
          Terms of Sales
        </Link>
        <Link className="footer__links" to="about-us">
          About us
        </Link>
        <Link className="footer__links" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
