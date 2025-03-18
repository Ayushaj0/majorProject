import Issue from '../models/Issue.js';

export const createIssue = async (req, res) => {
  try {
    const newIssue = await Issue.create(req.body);
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
