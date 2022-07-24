import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../style/Score.css";

const data = [
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "60px",
};

function Score() {
  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={143}
          height={143}
          data={data}
          innerRadius={25}
          barSize={4}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 10]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={30 / 2}
            fill="#0BEFF2"
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
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Score;
