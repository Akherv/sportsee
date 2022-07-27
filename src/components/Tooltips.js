import "../style/Tooltips.css";

function Tooltips({ active, datas }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        {/* <p className="label">{`${datas}g`}</p> */}
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">{`${datas}Kcal`}</p> */}
      </div>
    );
  }
  return null;
}
export default Tooltips;
