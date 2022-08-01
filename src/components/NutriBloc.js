import PropTypes from "prop-types";
import "../style/NutriBloc.css";

function NutriBloc({ type, bgColor, data, unit, title }) {
  return (
    <div className="nutriBloc">
      <div
        className={
          bgColor === "red"
            ? "nutriBloc_picture bg_red"
            : bgColor === "blue"
            ? "nutriBloc_picture bg_blue"
            : bgColor === "yellow"
            ? "nutriBloc_picture bg_yellow"
            : "nutriBloc_picture bg_pink"
        }
      >
        <img src={type} alt={type} />
      </div>
      <div className="nutriBloc_content">
        <h2>
          <span>
            {data} {unit}
          </span>
          <br />
          <span className="nutriBloc_content_title">{title}</span>
        </h2>
      </div>
    </div>
  );
}
export default NutriBloc;

NutriBloc.propTypes = {
  type: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  data: PropTypes.number,
  unit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
