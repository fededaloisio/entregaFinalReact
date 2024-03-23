import CartWidget from "../common/CartWidget";
import styles from "../../css/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
        <span className={styles.logo}>Logo</span>
      </Link>
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/category/teclado">
          <li>Teclados</li>
        </Link>
        <Link to="/category/mouse">
          <li>Mouses</li>
        </Link>
      </ul>
      <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
      <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;