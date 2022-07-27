import energy from "../assets/energy.png";
import chicken from "../assets/chicken.png";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import NutriBloc from "./NutriBloc";
import "../style/Nutrients.css";

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
              title="Calories"
            />
          </li>
          <li>
            <NutriBloc
              type={chicken}
              bgColor="blue"
              data={userKeyData?.proteinCount}
              title="Proteines"
            />
          </li>
          <li>
            <NutriBloc
              type={apple}
              bgColor="yellow"
              data={userKeyData?.carbohydrateCount}
              title="Glucides"
            />
          </li>
          <li>
            <NutriBloc
              type={cheeseburger}
              bgColor="pink"
              data={userKeyData?.lipidCount}
              title="Lipides"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nutrients;
