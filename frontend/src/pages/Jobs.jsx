import { useEffect, useState } from "react";
import axios from "axios";
import { Briefcase, MapPin, DollarSign, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
    const [filteredJobs, setFilteredJobs] = useState([]); // State for filtered jobs

    useEffect(() => {
        // Fetch all jobs
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:3000/jobs/getjobs", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setJobs(response.data);
                setFilteredJobs(response.data); // Initialize filtered jobs
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = jobs.filter((job) =>
            job.title.toLowerCase().includes(query) || 
            job.company.toLowerCase().includes(query) || 
            job.location.toLowerCase().includes(query)
        );
        setFilteredJobs(filtered);
    };

    return (
        <div className="min-h-screen py-8">
            {/* Search Form */}
            <form className="max-w-md mx-auto">
                <label
                    htmlFor="job-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="job-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                        placeholder="Search Jobs by title, company, or location..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </form>

            {/* Job Listings */}
            <div className="container mx-auto px-4 py-10 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <Link to={`/jobs/${job._id}`} key={job._id}>
                            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-lg font-semibold text-gray-800 truncate mb-2">
                                    {job.title}
                                </h2>
                                <div className="flex gap-4">
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <Briefcase className="w-4 h-4 mr-1" /> {job.company}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <MapPin className="w-4 h-4 mr-1" /> {job.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <Workflow className="w-4 h-4 mr-1" /> {job.workType}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <DollarSign className="w-4 h-4" /> {job.salary} {job.currency}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {filteredJobs.length === 0 && (
                    <p className="text-center text-gray-500">No jobs found.</p>
                )}
            </div>
        </div>
    );
}

export default Jobs;
