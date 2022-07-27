import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";
import "../style/Sessions.css";

function Sessions({ sessions }) {
  const datas = sessions?.map((el) => ({
    name: el.day,
    day: el.day,
    sessionLength: el.sessionLength,
  }));
  return (
    <div className="sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={datas}>
          <text
            x={200 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="#fff"
            fontSize={15}
          >
            Durée moyenne des sessions
          </text>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
          />
          <XAxis dataKey="name" stroke="#fff" fontSize={15} axisLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Sessions;
