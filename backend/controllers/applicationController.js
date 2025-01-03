import Application from '../models/application.model.js';
import userModel from '../models/user.model.js';

// Get all applications
export const getAllApplications = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("req.params.id: ", id);
        console.log("application working");

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Application ID is required'
            });
        }

        const application = await Application.find({ applicant: id })
            .populate('job', 'title')
            .sort({ appliedAt: -1 });

        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found'
            });
        }

        res.status(200).json({
            success: true,
            data: application
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch applications',
            error: error.message
        });
    }
};