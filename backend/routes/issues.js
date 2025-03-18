import express from 'express';
import Issue from '../models/Issue.js';

const router = express.Router();

// Create an issue
router.post('/', async (req, res) => {
  const { name, email, issueType, description } = req.body;

  // Validate input data (making sure all fields are provided)
  if (!name || !email || !issueType || !description) {
    return res.status(400).json({ error: "All fields (name, email, issueType, description) are required" });
  }

  try {
    // Create a new issue with the received data
    const newIssue = new Issue({ name, email, issueType, description });
    await newIssue.save();
    res.status(201).json(newIssue); // Respond with the saved issue
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

// Get all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues); // Respond with the list of issues
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

export default router;
