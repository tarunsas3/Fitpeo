import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
];

interface RoundedBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const OverviewChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={1} height={4} data={data}>
        <CartesianGrid
          strokeDasharray="0"
          horizontal={false}
          vertical={false}
        />
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Bar
          dataKey="uv"
          className="barItem"
          shape={<RoundedBar x={0} y={0} width={0} height={0} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const RoundedBar: React.FC<RoundedBarProps> = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
        ry={10}
        fill="#dde1e7"
      />
    </g>
  );
};
