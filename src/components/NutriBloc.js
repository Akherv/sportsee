import "../style/NutriBloc.css";

function NutriBloc({ type, bgColor }) {
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
          <span>1,930kCal</span>
          <br />
          Calorie
        </h2>
      </div>
    </div>
  );
}
export default NutriBloc;
