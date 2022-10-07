import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links__container">
        <Link className="navbar__link" to="/">
          HomePage
        </Link>
        <Link className="navbar__link" to="/store">
          Store
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
