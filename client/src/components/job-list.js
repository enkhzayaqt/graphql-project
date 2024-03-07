import JobItem from "./job-item"
export default function JobList({jobs}){
    return <ul className="box">
        {jobs.map(job=><JobItem job={job}/>)}
    </ul>
}