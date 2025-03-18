import express from 'express';
import { createIssue, getIssues } from '../controllers/issueController.js';

const router = express.Router();

router.post('/', createIssue);
router.get('/', getIssues);

export default router;
