import React from 'react';
import { analytics, salesData } from './mockData';
import { AnalyticsCard } from './AnalyticsCard';
import { SalesChart } from './SalesChart';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Store Dashboard</h1>
        <p className="text-gray-600">Welcome, Admin!</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {analytics.map((item) => (
          <AnalyticsCard key={item.title} {...item} />
        ))}
      </section>
      <section>
        <SalesChart data={salesData} />
      </section>
    </div>
  );
}
