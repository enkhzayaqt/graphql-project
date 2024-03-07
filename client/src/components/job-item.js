import { Link } from "react-router-dom"

export default function JobItem({job}){
    return (
        <li className="media">
            <div className="media-left has-text-gray">{job.location}</div>
            <div className='media-content'>
                <Link to={`/jobs/${job.id}`}>{`${job.title} - ${job.company}`}</Link>
                </div>
            
        </li>
    )
}