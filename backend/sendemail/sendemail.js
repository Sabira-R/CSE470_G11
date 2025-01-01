import nodemailer from 'nodemailer';
import userModel from '../models/user.model.js'; // Adjust the import path if necessary
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function sendMail(email, subject, msg) {
    transporter.sendMail({
        to: email,
        subject: subject,
        html: msg
    });
}

export async function notifyJobseekers(newJob) {
    try {
        const jobseekers = await userModel.getUsersWithRole('jobSeeker'); // Use userModel to call the function
        jobseekers.forEach(user => {
            sendMail(user.email, 'New Job Posted', `<h1>A new job has been posted: ${newJob.title}</h1><p>${newJob.description}</p>`);
        });
    } catch (error) {
        console.error('Error sending email notifications:', error);
    }
}

// Example usage when a new job is created
const newJob = {
    title: 'Software Engineer',
    description: 'We are looking for a skilled software engineer...'
};

notifyJobseekers(newJob);