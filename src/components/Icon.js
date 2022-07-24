import "../style/Icon.css";

function Icon({ type }) {
  return (
    <div className="icon">
      <img src={type} alt={type} />
    </div>
  );
}
export default Icon;
