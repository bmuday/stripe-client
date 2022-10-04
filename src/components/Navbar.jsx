import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">HomePage</Link>
      <Link to="/store">Store</Link>
    </nav>
  );
};

export default Navbar;
