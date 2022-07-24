import energy from "../assets/energy.png";
import chicken from "../assets/chicken.png";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import NutriBloc from "./NutriBloc";
import "../style/Nutrients.css";

function Nutrients() {
  return (
    <>
      <div className="nutrients">
        <ul>
          <li>
            <NutriBloc type={energy} bgColor={"red"} />
          </li>
          <li>
            <NutriBloc type={chicken} bgColor={"blue"} />
          </li>
          <li>
            <NutriBloc type={apple} bgColor={"yellow"} />
          </li>
          <li>
            <NutriBloc type={cheeseburger} bgColor={"pink"} />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nutrients;
