import PropTypes from "prop-types";
import "../style/Icon.css";

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
