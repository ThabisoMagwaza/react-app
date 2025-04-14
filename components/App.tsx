import React from 'react';
import AnotherComponent from './AnotherComponent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hello World, we're officially in business!
          </h1>
          <AnotherComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
