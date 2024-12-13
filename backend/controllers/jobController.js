import jobModel from "../models/job.model.js";

export async function createJob(req, res) {
    const {
        title,
        description,
        company,
        location,
        workType,
        salary,
        skills,
        applicationDeadline,
        experience,
        educationLevel,
        category
    } = req.body;

    try {
        // Convert salary and experience to numbers
        const salaryNumber = Number(salary);
        const experienceNumber = Number(experience);
        const postedBy = req.user._id

        // Create new job
        const newJob = new jobModel({
            title,
            description,
            company,
            location,
            workType,
            salary: salaryNumber,
            skills,
            applicationDeadline,
            experience: experienceNumber,
            educationLevel,
            postedBy: postedBy,
            category
        });

        console.log("poseted: ", postedBy);


        // Save job to database
        const savedJob = await newJob.save();

        // Send response
        res.status(201).json({
            message: "Job created successfully",
            data: savedJob
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}