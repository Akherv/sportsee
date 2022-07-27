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
import Tooltips from "../components/Tooltips";

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
          <XAxis dataKey="name" stroke="#9B9EAC" />
          <YAxis yAxisId="left" orientation="left" hide />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            axisLine={false}
          />
          <Tooltip
            content={<Tooltips data={datas} />}
            contentStyle={{
              // backgroundColor: "#E60000",
              borderRadius: 5,
              border: "none",
              color: "#fff",
            }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={36}
            iconType="circle"
          />
          <Bar
            barSize={20}
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            barSize={20}
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Activity;
