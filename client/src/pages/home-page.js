import JobList from "../components/job-list"

export default function HomePage(){
    return (
      <>
        <div className="title">Job openings</div>
        <JobList />
      </>
    );
}