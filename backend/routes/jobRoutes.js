import express from 'express';
import { createJob } from '../controllers/jobController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();


router.post('/createjob', authMiddleware, createJob)

export default router