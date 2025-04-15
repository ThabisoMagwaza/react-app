import React from 'react';
import { Clock, Shield, User, Home } from 'lucide-react';
import { Button } from './ui/button';

export type ShellData = {
  username: string;
  isAuthenticated: boolean;
  loginTime: string;
  roles: string[];
};

export function UserProfile({ data }: { data: ShellData | null }) {
  if (!data || !data.isAuthenticated) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gray-100 p-3 rounded-full">
            <User className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Guest User</h2>
            <p className="text-sm text-gray-500">Not signed in</p>
          </div>
        </div>
        <div className="mt-4">
          <Button
            onClick={() => (window.location.href = '/')}
            variant="default"
            className="w-full"
          >
            <Home className="w-4 h-4 mr-2" />
            Go to Home Page
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-50 p-3 rounded-full">
          <User className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {data.username}
          </h2>
          <p className="text-sm text-gray-500">
            {data.isAuthenticated
              ? 'Authenticated User'
              : 'Authentication Pending'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>Logged in at {new Date(data.loginTime).toLocaleString()}</span>
        </div>

        <div className="flex items-start text-sm text-gray-600">
          <Shield className="w-4 h-4 mr-2 mt-0.5" />
          <div>
            <span className="block mb-1">Roles:</span>
            <div className="flex flex-wrap gap-2">
              {data.roles.map((role) => (
                <span
                  key={role}
                  className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
