import PropTypes from "prop-types";
import energy from "../assets/energy.png";
import chicken from "../assets/chicken.png";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import NutriBloc from "./NutriBloc";
import "../style/Nutrients.css";

/**
 * Represents the container for NutriBloc element
 * @param   {Object}  userKeyData Nutrition datas
 * @return  {React.ReactElement}  Container for NutriBloc element
 */

function Nutrients({ userKeyData }) {
  return (
    <>
      <div className="nutrients">
        <ul>
          <li>
            <NutriBloc
              type={energy}
              bgColor={"red"}
              data={userKeyData?.calorieCount}
              unit="KCal"
              title="Calories"
            />
          </li>
          <li>
            <NutriBloc
              type={chicken}
              bgColor="blue"
              data={userKeyData?.proteinCount}
              unit="g"
              title="Proteines"
            />
          </li>
          <li>
            <NutriBloc
              type={apple}
              bgColor="yellow"
              data={userKeyData?.carbohydrateCount}
              unit="g"
              title="Glucides"
            />
          </li>
          <li>
            <NutriBloc
              type={cheeseburger}
              bgColor="pink"
              data={userKeyData?.lipidCount}
              unit="g"
              title="Lipides"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nutrients;

Nutrients.propTypes = {
  userKeyData: PropTypes.object,
};
