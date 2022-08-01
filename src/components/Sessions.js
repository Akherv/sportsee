import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import CustomTooltip from "../components/CustomTooltip";
import "../style/Sessions.css";

function Sessions({ sessions }) {
  const weekDay = ["L", "M", "M", "J", "V", "S", "D"];
  const datas = sessions?.map((el) => ({
    name: weekDay[el.day - 1],
    day: el.day,
    sessionLength: el.sessionLength,
  }));
  return (
    <div className="sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={100}
          data={datas}
          margin={{
            top: 100,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <text
            x={230 / 2}
            y={80 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255,255,255,80%)"
            fontSize={15}
          >
            Durée moyenne des sessions
          </text>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={{
              strokeWidth: 1,
              r: 0,
            }}
            activeDot={{
              strokeWidth: 5,
              r: 3,
            }}
          />
          <XAxis
            dataKey="name"
            stroke="rgba(255,255,255,80%)"
            fontSize={15}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip type="sessions" />}
            contentStyle={{
              color: "#000",
            }}
            cursor={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Sessions;
