import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from 'recharts';
import React from 'react';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 200, pv: 1400, amt: 1400},{name: 'Page c', uv: 1500, pv: 400, amt: 6400}];

export const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name"/>
    
  
    <YAxis label={{ value: 'PSI', angle: -90, position: 'insideLeft', textAnchor: 'bottom' }} />

        
  </LineChart>
  );

