import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../style/Performance.css";

function Performance({ type, data }) {
  const datas = data.map((el) => ({
    subject: type[el.kind],
    A: el.value,
  }));
  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={datas}>
          <PolarGrid vertical={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            fontSize={15}
            vertical={false}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Performance;
