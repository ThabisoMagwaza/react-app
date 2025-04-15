import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

export type SalesData = {
  month: string;
  sales: number;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-100">
      <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-900">
        ${payload[0].value?.toLocaleString()}
      </p>
    </div>
  );
};

export function SalesChart({ data }: { data: SalesData[] }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow mb-8">
      <h2 className="text-lg font-semibold mb-4">Sales (last 6 months)</h2>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6' }} />
            <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
