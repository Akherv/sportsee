import "../style/Icon.css";

function Icon({ type }) {
  return (
    <div className="icon">
      <img src={type} alt={type} />
    </div>
  );
}
// Icon.propTypes = {
//   type: PropTypes.string.isRequired
// }
// Icon.defaultProps = {
//   type: 'Mon titre par défaut',
// }
export default Icon;
