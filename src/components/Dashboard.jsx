import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Dashboard = () => {
  const [issues, setIssues] = useState([]);
  const [totalIssues, setTotalIssues] = useState(0);
  const [issueStats, setIssueStats] = useState({});
  const [chartData, setChartData] = useState(null);

  // Fetch all issues from backend
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/issues');
        const data = response.data;

        setIssues(data);
        setTotalIssues(data.length);

        // Generate statistics
        const stats = {
          roadMaintenance: data.filter((issue) => issue.issueType === 'road-maintenance').length,
          waterLogging: data.filter((issue) => issue.issueType === 'water-logging').length,
          trafficSignal: data.filter((issue) => issue.issueType === 'traffic-signal').length,
          resolved: data.filter((issue) => issue.status === 'resolved').length,
          inProgress: data.filter((issue) => issue.status === 'in-progress').length,
          pending: data.filter((issue) => issue.status === 'pending').length,
        };
        setIssueStats(stats);

        // Prepare chart data
        const issueCountsByDate = data.reduce((acc, issue) => {
          const date = new Date(issue.createdAt).toLocaleDateString();
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(issueCountsByDate),
          datasets: [
            {
              label: 'Issues Reported Over Time',
              data: Object.values(issueCountsByDate),
              backgroundColor: 'rgba(75, 156, 211, 0.2)',
              borderColor: '#4B9CD3',
              borderWidth: 2,
              tension: 0.3,
              pointRadius: 4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Dashboard</h2>
      <p className="text-gray-600">Track and manage reported issues efficiently.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transform transition">
          <h2 className="text-xl font-medium">Total Issues</h2>
          <p className="text-5xl font-bold">{totalIssues}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transform transition">
          <h2 className="text-xl font-medium">In Progress</h2>
          <p className="text-5xl font-bold">{issueStats.inProgress || 0}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transform transition">
          <h2 className="text-xl font-medium">Resolved</h2>
          <p className="text-5xl font-bold">{issueStats.resolved || 0}</p>
        </div>
      </div>

      {/* Issue Stats by Type */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-red-500 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transform transition">
          <h2 className="text-xl font-medium">Road Maintenance</h2>
          <p className="text-5xl font-bold">{issueStats.roadMaintenance || 0}</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transform transition">
          <h2 className="text-xl font-medium">Water Logging</h2>
          <p className="text-5xl font-bold">{issueStats.waterLogging || 0}</p>
        </div>
        <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transform transition">
          <h2 className="text-xl font-medium">Traffic Signal</h2>
          <p className="text-5xl font-bold">{issueStats.trafficSignal || 0}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Issues Reported Over Time</h2>
        {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
      </div>

      {/* Recent Issues */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Issues</h2>
        <ul>
          {issues.slice(0, 5).map((issue) => (
            <li
              key={issue._id}
              className="flex justify-between items-center py-3 border-b last:border-none"
            >
              <div className="text-lg font-medium text-gray-700">{issue.title || 'Untitled Issue'}</div>
              <div
                className={`text-sm font-semibold capitalize ${
                  issue.status === 'resolved'
                    ? 'text-green-500'
                    : issue.status === 'in-progress'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {issue.status || 'pending'}
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/dashboard"
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View All Issues
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
