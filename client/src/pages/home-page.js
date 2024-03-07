import JobList from "../components/job-list"
import {jobs} from "../lib/data"

export default function HomePage(){
    return (
      <>
        <div className="title">Job openings</div>
        <JobList jobs={jobs} />
      </>
    );
}