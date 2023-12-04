//Diagramm: Eine Komponente, die das Liniendiagramm rendert.
//DiagrammLegende: Eine Komponente für die Legende des Diagramms.


import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
 
const data = [
  { name: 'A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'C', uv: 200, pv: 9800, amt: 2290 },
  { name: 'D', uv: 278, pv: 3908, amt: 2000 },
  { name: 'E', uv: 189, pv: 4800, amt: 2181 },
  { name: 'F', uv: 239, pv: 3800, amt: 2500 },
  { name: 'G', uv: 349, pv: 4300, amt: 2100 },
];
 
function Chart() {
  return (
<LineChart width={600} height={300} data={data}>
<Line type="monotone" dataKey="uv" stroke="#8884d8" />
<CartesianGrid stroke="#ccc" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
</LineChart>
  );
}
 
export default function App() {
  return (
<div>
<Chart />
</div>
  );
}






