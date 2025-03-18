import { ApiError } from './error.js';

export const validateIssue = (req, res, next) => {
  const { name, email, issueType, description, location } = req.body;
  
  if (!name || !email || !issueType || !description || !location) {
    throw new ApiError(400, 'Missing required fields');
  }

  if (!['road-maintenance', 'water-logging', 'traffic-signal'].includes(issueType)) {
    throw new ApiError(400, 'Invalid issue type');
  }

  next();
};
