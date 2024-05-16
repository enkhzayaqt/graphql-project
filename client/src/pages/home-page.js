import JobList from "../components/job-list"
import { getJobs } from "../graphql/query";
import {jobs} from "../lib/data"

getJobs().then(data => console.log(data[0]))

export default function HomePage(){
    return (
      <>
        <div className="title">Job openings</div>
        <JobList jobs={jobs} />
      </>
    );
}