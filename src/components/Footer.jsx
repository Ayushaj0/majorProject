import React from 'react';

const Footer = () => {
  return (
    <footer className="p-6 bg-gray-900 text-white text-center shadow-lg">
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          © 2024 <span className="font-semibold">Road Maintenance</span>. All rights reserved.
        </p>
        <p className="mt-2 text-sm md:text-base">
          Made with <span className="text-red-500">❤️</span> by <span className="font-semibold">Ayush</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
