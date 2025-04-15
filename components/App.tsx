import React, { useEffect, useState } from 'react';
import { analytics, salesData } from './mockData';
import { AnalyticsCard } from './AnalyticsCard';
import { SalesChart } from './SalesChart';
import { UserProfile, ShellData } from './UserProfile';

export default function App() {
  const [shellData, setShellData] = useState<ShellData | null>(null);

  useEffect(() => {
    // Try to get initial data from window object
    if ((window as any).shellData) {
      setShellData((window as any).shellData);
    }

    // Listen for data updates from the shell
    const handleShellData = (event: CustomEvent) => {
      setShellData(event.detail);
    };

    // Request data from the shell
    document.dispatchEvent(new CustomEvent('requestData'));

    // Add event listener for shell data
    document.addEventListener('shellData', handleShellData as EventListener);

    return () => {
      // Clean up
      document.removeEventListener(
        'shellData',
        handleShellData as EventListener
      );
    };
  }, []);

  const isAuthenticated = shellData?.isAuthenticated;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Store Dashboard</h1>
      </header>

      <UserProfile data={shellData} />

      {isAuthenticated && (
        <>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {analytics.map((item) => (
              <AnalyticsCard key={item.title} {...item} />
            ))}
          </section>

          <section>
            <SalesChart data={salesData} />
          </section>
        </>
      )}
    </div>
  );
}
