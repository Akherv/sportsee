import PropTypes from "prop-types";
import "../style/CustomTooltip.css";

/**
 * Represents a customTooltip.
 * @param   {boolean} active      True if the user hover on chart
 * @param   {Array}   payload     Datas of the chart
 * @param   {string}  type        (activity|sessions)
 * @return  {React.ReactElement}  CustomTooltip for a chart
 */

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
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};
