import { useParams } from "react-router-dom"
import { jobs } from "../lib/data";

export default function JobPage(){
    const {jobId} = useParams();
    const job = jobs.find((job) => job.id == jobId)
    console.log(job)
    return (
        <div>
            <h1 className="title is-3">{job?.title}</h1>
            <h2 className="subtitle is-5">{job?.company}</h2>
        </div>
    )
}