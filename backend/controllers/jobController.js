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

        console.log("body: ", req.body);


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

export async function getJobs(req, res) {
    try {
        const jobs = await jobModel.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export async function getJobDetails(req, res) {
    const { id } = req.params;

    const job = await jobModel.findById(id);

    if (!job) {
        return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
}


export async function editJobDetails(req, res) {
    const { id } = req.params

    const {
        title,
        description,
        company,
        location,
        workType,
        salary,
        skills,
        applicationDeadline,
    } = req.body

    console.log("req.body: ", req.body);


    try {
        const salaryNumber = Number(salary);

        const job = await jobModel.findByIdAndUpdate(id, {
            title,
            description,
            company,
            location,
            workType,
            salary: salaryNumber,
            skills,
            applicationDeadline,
        }, { new: true })

        if (!job) {
            return res.status(404).json({ message: "Job not found" })
        }

        res.status(200).json({
            message: "Job updated successfully",
            data: job
        })

    } catch (error) {
        res.status(500).json({ message: "Server error", error })
    }
}


export async function deleteJob(req, res) {
    const { id } = req.params

    try {
        const job = await jobModel.findByIdAndDelete(id)

        if (!job) {
            return res.status(404).json({ message: "Job not found" })
        }

        res.status(200).json({
            message: "Job deleted successfully",
            data: job
        })


    }
    catch (error) {
        res.status(500).json({ message: "Server error", error })
    }
}