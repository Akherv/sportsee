import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../style/Performance.css";

/**
 * Represents the Performance bloc chart.
 * @param   {Object}  type  Score type
 * @param   {Array.<{value: number, kind: number}>}  data  Score data
 * @return  {React.ReactElement} Performance bloc RadarChart component
 */

function Performance({ type, data }) {
  const datas =
    data &&
    data.map((el) => ({
      subject: type[el.kind],
      A: el.value,
    }));
  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          innerRadius={10}
          data={datas}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <PolarGrid vertical={false} radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            style={{ transform: "rotate(60)" }}
          />
          <PolarRadiusAxis axisLine={false} tick={false} scale="auto" />
          <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Performance;

Performance.propTypes = {
  type: PropTypes.object,
  data: PropTypes.array,
};
