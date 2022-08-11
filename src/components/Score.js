import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../style/Score.css";

/**
 * Represents the Score bloc chart.
 * @param   {number}  userScore  Score datas
 * @return  {React.ReactElement} Score bloc chart
 */

function Score({ userScore }) {
  const circleSize = 300;
  const data = [
    {
      score: userScore * 100,
      fill: "#e60000",
    },
  ];

  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          data={data}
          innerRadius="70%"
          barSize={10}
          startAngle={180}
          endAngle={-180}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            className="scoreBack"
            background
            dataKey="score"
            cornerRadius={30 / 2}
            clockwise
          />
          <text
            x="20%"
            y="15%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fontSize="0.8em"
          >
            Score
          </text>
          <text textAnchor="middle" dominantBaseline="middle" fontSize="1em">
            <tspan
              x="50%"
              y="35%"
              dy="0.71em"
              fontSize="1.2em"
              className="progress-label-number"
            >
              {userScore && userScore * 100}%
            </tspan>
            <tspan
              x="50%"
              y="50%"
              dy="0.5em"
              fontSize="0.7em"
              className="progress-label-text"
            >
              de votre
            </tspan>
            <tspan
              x="50%"
              y="58%"
              dy="0.5em"
              fontSize="0.7em"
              className="progress-label-text"
            >
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Score;

Score.propTypes = {
  userScore: PropTypes.number.isRequired,
};

Score.defaultProps = {
  userScore: 0,
};
