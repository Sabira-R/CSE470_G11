import React from 'react';

const JobApplication = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-4">Job Application</h1>
            <form>
                {/* Add form fields for job application here */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                    <input type="file" id="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit Application</button>
            </form>
        </div>
    );
};

export default JobApplication;
