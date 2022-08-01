import yoga from "../assets/yoga.png";
import swim from "../assets/swim.png";
import bike from "../assets/bike.png";
import fitness from "../assets/fitness.png";
import Icon from "../components/Icon";
import "../style/Navbar_v.css";

/**
 * Represents a navbar.
 * @constructor
 * @return {React.ReactElement} - navbar of the app
 */

function Navbar_v() {
  return (
    <nav className="navbar_v">
      <ul className="navbar_v_links">
        <li>
          <Icon type={yoga} />
        </li>
        <li>
          <Icon type={swim} />
        </li>
        <li>
          <Icon type={bike} />
        </li>
        <li>
          <Icon type={fitness} />
        </li>
      </ul>
      <span className="legal">Copyright, SportSee 2020</span>
    </nav>
  );
}
export default Navbar_v;
