import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "./graphdata";

const Graph = () => {
  return (
    <div className="graph_body">
      <LineChart width={800} height={300} data={data}>
        <XAxis dataKey={data.numbered_level} />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="retention_time" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Graph;
