import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

const Jobs = () => {

    const jobsData = useLoaderData();

    return (
        <div className='jobs'>
            {jobsData.map((job) => {
                return (
                    <Link key={job.id} to={job.id.toString()}> 
                        <h4>{job.title}</h4>
                        <p>{job.location}</p>
                    </Link>
                );
            })}
        </div>
    )
}
export default Jobs


export const jobsLoader = async () => {
    const res = await fetch('http://localhost:5050/jobs');

    if (!res.ok) {
        throw new Error('Failed to fetch jobs'); 
    }

    const data = await res.json(); 
    return data; 
};