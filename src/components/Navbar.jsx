import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md ${
      location.pathname === path
        ? 'bg-white text-blue-600 font-semibold shadow-md'
        : 'hover:bg-blue-500 transition-colors'
    }`;

  return (
    <nav className="p-4 bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wider">
            🚧 Road Maintenance
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link to="/report" className={linkClasses('/report')}>
            Report Issue
          </Link>
          <Link to="/dashboard" className={linkClasses('/dashboard')}>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
