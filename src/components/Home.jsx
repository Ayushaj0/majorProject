import React from 'react';
import { Link } from 'react-router-dom';
import roadImage from '../assets/road-image.jpg';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
            Welcome to the <span className="text-yellow-300">Road Maintenance Platform</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-200">
            Take part in improving our community's infrastructure by reporting issues like road maintenance, water logging, or faulty traffic signals. Together, we can make commuting safer and more efficient!
          </p>
        </header>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/report">
            <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Report an Issue
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="px-8 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
              View Dashboard
            </button>
          </Link>
        </div>

        {/* Image with Overlay Section */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src={roadImage}
            alt="Road Maintenance"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center p-6 text-center">
            <h2 className="text-3xl font-bold text-yellow-300 mb-2">Join the Effort</h2>
            <p className="text-lg text-gray-200">
              Help us create safer, better roads by reporting issues and staying informed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

