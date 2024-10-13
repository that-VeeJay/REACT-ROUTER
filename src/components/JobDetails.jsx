import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const jobDetails = useLoaderData();

    return (
        <div className='job-details'>
            <p><b>Job Title:</b>{jobDetails.title}</p>
            <p><b>Salary:</b>{jobDetails.salary}</p>
            <p><b>Location:</b>{jobDetails.location}</p>
            <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illum. Soluta maiores cumque totam iure quidem repellat, esse minima aliquid.</p>
            <button>Apply Now</button>
        </div>
    )
}
export default JobDetails


export const jobDetailsLoader = async ({ params }) => {
    const { id } = params; 
    const res = await fetch('http://localhost:5050/jobs/' + id);

    if (!res.ok) {
        throw new Error(`Failed to fetch job details for ID: ${id}`);
    }

    const data = await res.json(); 
    return data;
};
