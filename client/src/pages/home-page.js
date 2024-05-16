import { useEffect, useState } from "react";
import JobList from "../components/job-list"
import { getJobs } from "../graphql/query";


export default function HomePage(){
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    getJobs().then(data => setJobs(data))
  }, [])
  
  console.log(jobs)
    return (
      <>
        <div className="title">Job openings</div>
        <JobList jobs={jobs} />
      </>
    );
}