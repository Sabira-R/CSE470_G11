import Application from '../models/application.model.js';

// Get all applications
export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find()
            .populate('job', 'title')
            .sort({ appliedAt: -1 });

        res.status(200).json({
            success: true,
            data: applications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch applications',
            error: error.message
        });
    }
};
