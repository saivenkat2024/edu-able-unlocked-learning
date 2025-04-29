
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-edu-purple mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button size="lg" className="bg-edu-purple hover:bg-edu-dark-purple">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" /> Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
