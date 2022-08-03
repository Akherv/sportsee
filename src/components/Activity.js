import PropTypes from "prop-types";
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
import CustomTooltip from "../components/CustomTooltip";
import "../style/Activity.css";

/**
 * Represents the Activity bloc chart.
 * @param   {Array}  sessions    Sessions datas
 * @return  {React.ReactElement} Activity bloc chart
 */

function Activity({ sessions }) {
  const datas = sessions?.map((el, idx) => ({
    name: idx + 1,
    kilogram: el.kilogram,
    calories: el.calories,
  }));

  return (
    <div className="activity">
      <ResponsiveContainer width="100%">
        <BarChart
          width={500}
          height={300}
          data={datas}
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
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" stroke="#9B9EAC" tickLine={false} dy={10} />
          <YAxis yAxisId="right" stroke="#9B9EAC" orientation="left" hide />
          <YAxis
            yAxisId="left"
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip type="activity" />}
            contentStyle={{
              backgroundColor: "#E60000",
              borderRadius: 5,
              border: "none",
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={60}
            iconType="circle"
            iconSize={8}
          />
          <Bar
            barSize={15}
            yAxisId="left"
            dataKey="kilogram"
            name="Poids (Kg)"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            barSize={15}
            yAxisId="right"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Activity;

Activity.propTypes = {
  sessions: PropTypes.array.isRequired,
};
