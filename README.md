**JobMadeEasy: A Comprehensive Job Management Platform**

JobMadeEasy is a feature-rich platform designed to simplify job management for employers and streamline job searches for seekers. This project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on delivering an intuitive user experience, efficient data handling, and secure functionality.

**Features and Requirements**

**1. Job Management and Filtering**

Job Listing CRUD: Employers can create, update, and delete job postings.

Search Functionality: Job seekers can search for jobs by title or keywords.

Filtering and Sorting Options: Filter jobs by location, status, or work type. Sort jobs by posting date, relevance, or salary.

Pagination: Efficiently display job listings with seamless pagination.

**2. Application Management and Notifications**

Apply for Jobs: Job seekers can submit applications for jobs.

Application Eligibility: Users cannot apply for their own posted jobs.

Application Tracker: Users can track the status of their applications (e.g., pending, shortlisted).

Email Notifications: Notify users about application updates or job recommendations.

Bulk Application Status Update: Employers can update multiple application statuses simultaneously.

**3. Frontend UI and Navigation**

Optimized Environment: Utilizes React's single-state performance and robust functionality.

Landing Page: A responsive and user-friendly homepage showcasing features and purpose.

Registration Form: Intuitive user registration form.

Public & Private Routes: Secure navigation based on user authentication and roles (frontend-only implementation due to time constraints).

Breadcrumb Navigation: Enhance user navigation through breadcrumb trails.

Save Job Draft: Employers can save drafts of job postings before publishing.

Navigation Bar: Comprehensive navigation system covering all pages.

Loading Animations: Includes page name displays and animations during data fetching.

**4. Admin Control and Analytics**

Admin Dashboard: Allows admins to view and manage user and job information.

Job Listing Moderation: Admins can review and approve job postings.

Analytics Dashboard: Displays job-related statistics (dummy data for analytics).

Admin Jobs Page: Accessible only to admins.

**5. Data Security and Optimization**

Rate Limiting: IP-based rate limiting to prevent abuse.

Data Encryption: Ensures secure storage and transmission of sensitive data.


**Run the development servers:**

**Backend**

cd backend

npm start


**Frontend**

cd frontend

npm run dev
