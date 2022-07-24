import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  // PieChart,
  // Pie,
  // Sector,
  // Cell,
  ResponsiveContainer,
} from "recharts";
import "../style/Score.css";

const data = [
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#e60000",
  },
];
// const data01 = [{ name: "Group A", value: 100 }];
// const data02 = [{ name: "A1", value: 10 }];

function Score() {
  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={300}
          height={300}
          data={data}
          innerRadius={100}
          barSize={10}
          startAngle={250}
          endAngle={-290}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 70]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar background dataKey="value" cornerRadius={30 / 2} />
          <text
            x={100 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fontSize={15}
          >
            <tspan x={330 / 2} y={220 / 2} dy="0.71em" fontSize={30}>
              12%
            </tspan>
            <tspan x={330 / 2} y={300 / 2} dy="0.71em">
              de votre
            </tspan>
            <tspan x={330 / 2} y={350 / 2} dy="0.71em">
              objectif
            </tspan>
          </text>
        </RadialBarChart>
        {/* <PieChart width={730} height={250}>
          <text
            x={100 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>

          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#fff"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
            fill="#e60000"
          />
          <text
            x={350 / 2}
            y={280 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fontSize={15}
          >
            12% de votre objectif
          </text>
        </PieChart> */}
      </ResponsiveContainer>
    </div>
  );
}
export default Score;
