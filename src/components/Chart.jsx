import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./style.css";

// const data = [
//   { name: "Full Time", value: 205 },
//   { name: "Part Time", value: 317 },
//   { name: "Daily Wage", value: 502 },
// ];

const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   nameKey,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor="middle"
//       dominantBaseline="central"
//     >
//       {data[index]} {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const Chart = ({ data, color, reverse }) => {
  if (reverse) {
    data.sort((a, b) => a.value - b.value);
  } else {
    data.sort((a, b) => b.value - a.value);
  }

  return (
    <div className="flex w-full h-full">
      <ResponsiveContainer width="50%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={130}
            fill="#8884d8"
            nameKey="name"
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
              nameKey,
              index,
            }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="uppercase "
                >
                  {data[index].name} {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index % color.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="ml-8 mt-16 flex flex-col items-center gap-2 ">
        <table>
          <tr>
            <td class="label">TOTAL USER</td>
            <td>=</td>
            <td>2000</td>
          </tr>
          {data.map((element, index) => (
            <tr>
              <td class="label">{element.name}</td>
              <td>=</td>
              <td>{element.value}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Chart;
