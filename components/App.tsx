import React from 'react';
import { Button } from './ui/button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-card shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-card-foreground mb-8">
            Hello World, we're officially in business!
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Button size="lg">Default Button</Button>
            <Button variant="destructive" size="lg">
              Destructive Button
            </Button>
            <Button variant="outline" size="lg">
              Outline Button
            </Button>
            <Button variant="secondary" size="lg">
              Secondary Button
            </Button>
            <Button variant="ghost" size="lg">
              Ghost Button
            </Button>
            <Button variant="link" size="lg">
              Link Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
