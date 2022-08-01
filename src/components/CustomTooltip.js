import PropTypes from "prop-types";
import "../style/CustomTooltip.css";

function CustomTooltip({ active, payload, type }) {
  if (active && payload && payload.length) {
    if (type === "activity") {
      return (
        <div className="custom-tooltip_activity">
          <p className="label">{`${payload[0].payload?.kilogram}g`}</p>
          <p className="label">{`${payload[0].payload?.calories}KCal`}</p>
        </div>
      );
    } else {
      return (
        <div className="custom-tooltip_sessions">
          <p className="label">{`${payload[0].payload?.sessionLength} min`}</p>
        </div>
      );
    }
  }
  return null;
}
export default CustomTooltip;

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  type: PropTypes.string.isRequired,
};
