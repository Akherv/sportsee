import PropTypes from "prop-types";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import CustomTooltip from "../components/CustomTooltip";
import "../style/Sessions.css";

/**
 * Represents the Sessions bloc chart.
 * @param   {Array.<{day: number, sessionLength: number}>}  sessions  Sessions datas
 * @return  {React.ReactElement} Sessions bloc chart
 */

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
            top: 80,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <text
            y="10%"
            textAnchor="left"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255,255,255,80%)"
            fontSize="0.7em"
          >
            <tspan x="10%" dy="10">
              Durée moyenne des
            </tspan>
            <tspan></tspan>
            <tspan x="10%" dy="20">
              sessions
            </tspan>
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
            fontSize="0.7em"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip type="sessions" />}
            contentStyle={{
              color: "#000",
              fontSize: "0.7em",
            }}
            cursor={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Sessions;

Sessions.propTypes = {
  sessions: PropTypes.array.isRequired,
};

Sessions.defaultProps = {
  sessions: [],
};
