import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [users, setUsers] = useState([]);
    const [applications, setApplications] = useState(0);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/jobs/getjobs', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                console.log('Jobs response:', response.data); // Log the response
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                console.log('Users response:', response.data); // Log the response
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/applications/count', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                console.log('Applications response:', response.data); // Log the response
                setApplications(response.data.count); // Set the count
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        fetchJobs();
        fetchUsers();
        fetchApplications();
    }, []);

    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Total Jobs</h2>
                <p className="text-gray-700 text-lg">{jobs.length}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Total Users</h2>
                <p className="text-gray-700 text-lg">{users.length}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Total Applications</h2>
                <p className="text-gray-700 text-lg">{applications}</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold mt-4 mb-2">Usernames</h1>
                <ul className="list-disc pl-5">
                    {users.map(user => (
                        <li key={user.id} className="text-lg text-gray-800 mb-2">{user.username}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;