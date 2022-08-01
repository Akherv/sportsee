import PropTypes from "prop-types";
import "../style/Header.css";

/**
 * Represents a header.
 * @constructor
 * @param {object} userInfos - contains the firstName of the user
 * @return {React.ReactElement} - header of dashboard
 */

function Header({ userInfos }) {
  return (
    <div className="header">
      <h1>
        Bonjour <span>{userInfos && userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
export default Header;

Header.propTypes = {
  type: PropTypes.object,
};
