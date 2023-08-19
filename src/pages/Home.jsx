import { useState } from "react";
import Loading from "../components/Loading";
import JobCard from "../features/jobs/components/JobCard";
import useJobs from "../features/jobs/hooks/useJobs";
import JobDetails from "../features/jobs/components/JobDetails";

const Home = () => {
  const { data, isLoading } = useJobs();
  const [job, setJob] = useState(null);

  const handleClick = (selectedJob) => {
    setJob(selectedJob);
  };

  const handleClose = () => {
    setJob(null);
  };

  return (
   <>
      <div className="relative overflow-hidden h-full flex gap-2">
        <div className="h-full flex-1 overflow-auto flex flex-col gap-2">
          {data &&
            data.map((job) => (
              <JobCard key={job.id} job={job} onClick={handleClick} />
            ))}
        </div>
        <JobDetails onClose={handleClose} job={job} />
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
