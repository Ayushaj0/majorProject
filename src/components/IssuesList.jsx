// src/components/IssuesList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);

  // Fetch issues when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/issues') // URL to your backend API
      .then((response) => {
        setIssues(response.data); // Update state with fetched issues
      })
      .catch((error) => {
        setError('Error fetching issues');
        console.error(error); // Log the error in the console
      });
  }, []);

  return (
    <div>
      <h2>Reported Issues</h2>
      {error && <p>{error}</p>} {/* Show error if there's one */}
      <ul>
        {issues.map((issue) => (
          <li key={issue._id}>
            <strong>{issue.title}</strong>: {issue.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuesList;
