import { useState } from "react";

function App() {
  return (
    <>
      <JobList />
    </>
  );
}

export default App;

// JobCard Component
type JobProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

const JobCard: React.FC<{ job: JobProps }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-info">
        {job.company} - {job.location}
      </p>
      <button
        className="toggle-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p className="job-salary">Salary: {job.salary}</p>}
    </div>
  );
};

// JobList Component
const JobList: React.FC = () => {
  const jobs: JobProps[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "₦400,000",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Dev Solutions",
      location: "Enugu",
      salary: "₦300,000",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Inc.",
      location: "Lagos",
      salary: "₦350,000",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Data Works",
      location: "Abuja",
      salary: "₦500,000",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovate Ltd.",
      location: "Remote",
      salary: "₦600,000",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Port Harcourt",
      salary: "₦450,000",
    },
    {
      id: 7,
      title: "Mobile Developer",
      company: "App Hub",
      location: "Kano",
      salary: "₦380,000",
    },
    {
      id: 8,
      title: "QA Tester",
      company: "Bug Free",
      location: "Onitsha",
      salary: "₦320,000",
    },
    {
      id: 9,
      title: "Security Analyst",
      company: "CyberSafe",
      location: "Jos",
      salary: "₦550,000",
    },
    {
      id: 10,
      title: "Technical Writer",
      company: "DocsPro",
      location: "Remote",
      salary: "₦280,000",
    },
  ];

  return (
    <div className="job-list">
      <h1 className="job-list-title">Job Listings</h1>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="no-jobs">No jobs available at the moment.</p>
      )}
    </div>
  );
};
