import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
];

const colors = ["#b4bfe9", "#581edf"];
const innerRadii = [50, 30];
export default function PieChartGraph() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="200"
        cy="200"
        outerRadius={150}
        innerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} stroke="10" />
        ))}
      </Pie>
    </PieChart>
  );
}
