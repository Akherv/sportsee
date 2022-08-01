import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../style/Score.css";

function Score({ userScore }) {
  const circleSize = 300;
  const data = [
    {
      score: userScore * 10,
      fill: "#e60000",
    },
  ];

  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx={circleSize / 1.8}
          cy={circleSize / 2}
          width={circleSize}
          height={circleSize}
          data={data}
          innerRadius={90}
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
            x={100 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>
          <text textAnchor="middle" dominantBaseline="middle" fontSize={15}>
            <tspan
              x={330 / 2}
              y={220 / 2}
              dy="0.71em"
              fontSize={30}
              className="progress-label-number"
            >
              12%
            </tspan>
            <tspan
              x={330 / 2}
              y={300 / 2}
              dy="0.71em"
              className="progress-label-text"
            >
              de votre
            </tspan>
            <tspan
              x={330 / 2}
              y={350 / 2}
              dy="0.71em"
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
