import express from 'express';
import { getAllApplications } from '../controllers/applicationController.js';

const router = express.Router();

// Get all applications
router.get('/:id', getAllApplications);

export default router;