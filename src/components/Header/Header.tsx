import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>

        <NavLink to="/products">
          <p>Products </p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
