import React, { useState } from 'react';
import axios from 'axios';

const ReportIssue = () => {
  const [form, setForm] = useState({ name: '', email: '', issueType: '', description: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages
    try {
      const response = await axios.post('http://localhost:5000/api/issues', form);
      alert('Issue reported successfully!');
      setForm({ name: '', email: '', issueType: '', description: '' }); // Clear form on success
    } catch (error) {
      setErrorMessage('Failed to report the issue. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg mt-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Report an Issue</h2>
      
      {/* Error message */}
      {errorMessage && (
        <div className="text-red-600 text-center mb-4 p-2 border border-red-400 bg-red-100 rounded">
          <p>{errorMessage}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <select
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            name="issueType"
            value={form.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select Issue Type</option>
            <option value="road-maintenance">Road Maintenance</option>
            <option value="water-logging">Water Logging</option>
            <option value="traffic-signal">Traffic Signal</option>
          </select>
        </div>

        <div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            name="description"
            placeholder="Describe the issue in detail"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          type="submit"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;