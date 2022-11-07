import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <span>NNK</span>
      <ul>
        <li>
          <Link to="/">HAKKINDA</Link>
        </li>
        <li>
          <Link to="/food">YEMEKLER</Link>
        </li>
        <li>
          <Link to="/contact">İLETİŞİM</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
