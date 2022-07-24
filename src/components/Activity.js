import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../style/Activity.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Activity() {
  return (
    <div className="activity">
      <ResponsiveContainer width="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <text
            x={200 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="#000"
            fontSize={15}
          >
            Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#9B9EAC" />
          <YAxis yAxisId="left" orientation="left" hide />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            height={36}
            iconType="circle"
          />
          <Bar yAxisId="left" dataKey="uv" fill="#282D30" />
          <Bar yAxisId="right" dataKey="pv" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Activity;
