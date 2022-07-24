import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";
import "../style/Sessions.css";

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

// const style = {
//   color: "#fff",
//   fontSize:15
// };

function Sessions() {
  //demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  return (
    <div className="sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <text
            x={200 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            // style={style}
            fill="#fff"
            fontSize={15}
          >
            Durée moyenne des sessions
          </text>
          <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
          <XAxis dataKey="name" stroke="#fff" fontSize={15} axisLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Sessions;
