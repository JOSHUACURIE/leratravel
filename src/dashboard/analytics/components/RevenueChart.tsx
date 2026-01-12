import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./RevenueChart.css";

type RevenueChartProps = {
  revenueData: { date: string; amount: number }[];
};

export const RevenueChart: React.FC<RevenueChartProps> = ({ revenueData }) => {
  return (
    <div className="analytics-charts">
      <div className="chart-header">
        <h4>Revenue Distribution</h4>
        <div className="live-indicator">
          <span className="dot"></span>
          Live Updates
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              tickFormatter={(value) => `Ksh ${value / 1000}k`}
            />
        <Tooltip 
  contentStyle={{ 
    borderRadius: '10px', 
    border: 'none', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
  }}
 
  formatter={(value: number | string | undefined) => {
    if (value === undefined) return ["KES 0", "Revenue"];
    return [`KES ${Number(value).toLocaleString()}`, "Revenue"];
  }}
/>
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              animationBegin={0}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};