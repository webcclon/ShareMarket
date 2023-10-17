import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CircularBar from './CircularBar';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 1090,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 2090,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 1390,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3800,
    amt: 3300,
  },
  {
    name: 'Dec',
    uv: 1590,
    amt: 1800,
  },
];

const colors = [ '#b4bfe9', '#581edf'];

function Chart() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" shape={<CircularBar />}>
          {data.map((entry, index) => (
           <Cell key={`cell-${index}`} fill={entry.name === 'Aug' ? colors[1] : colors[0]} />
          )
        )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
}

export default Chart;