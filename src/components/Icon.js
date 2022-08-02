import PropTypes from "prop-types";
import "../style/Icon.css";

/**
 * Represents an Icon.
 * @param   {string}  type  Icon type
 * @return  {React.ReactElement} Icon element
 */

function Icon({ type }) {
  return (
    <div className="icon">
      <img src={type} alt={type} />
    </div>
  );
}
Icon.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Icon;
