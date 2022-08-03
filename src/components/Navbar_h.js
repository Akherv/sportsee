import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/Navbar_h.css";

/**
 * Represents an horizontal navbar.
 * @param void
 * @return {React.ReactElement} Horizontal navbar
 */

function Navbar_h() {
  const location = useLocation();

  return (
    <nav className="navbar_h">
      <Link to="/">
        <img src={logo} alt="logo SportSee" />
      </Link>
      <ul className="navbar_h_links">
        <li
          className={
            location.pathname === ("/" || "/accueil" || "/home")
              ? "navbar_h_links_active"
              : ""
          }
        >
          <Link to="/">Accueil</Link>
        </li>
        <li
          className={
            location.pathname === "/profil" ? "navbar_h_links_active" : ""
          }
        >
          <Link to="/profil">Profil</Link>
        </li>
        <li
          className={
            location.pathname === ("/reglage" || "/parameter")
              ? "navbar_h_links_active"
              : ""
          }
        >
          <Link to="/parameter">Réglage</Link>
        </li>
        <li
          className={
            location.pathname === ("/communaute" || "/community")
              ? "navbar_h_links_active"
              : ""
          }
        >
          <Link to="/community">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar_h;
