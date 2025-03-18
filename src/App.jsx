import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ReportIssue from './components/ReportIssue';
import Dashboard from './components/Dashboard';
import IssuesList from './components/IssuesList'; // Import the IssuesList component

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/issues" element={<IssuesList />} /> {/* Add a route to display issues */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
