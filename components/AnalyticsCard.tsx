import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export type AnalyticsCardProps = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
};

export function AnalyticsCard({
  title,
  value,
  change,
  positive,
}: AnalyticsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <span
            className={`text-sm ${
              positive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
