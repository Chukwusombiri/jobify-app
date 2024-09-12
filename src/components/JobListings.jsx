import React from 'react'
import JobListItem from './JobListItem';
import Spinner from './Spinner';
const apiUrl = import.meta.env.VITE_API_URL;

const JobListings = ( { heading='Browse Jobs', isHome = false } ) => {
    const [jobs, setJobs] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect( () =>{
        const fetchJobs = async() => {
            const finalApiUrl = isHome ? `${apiUrl}/jobs?_limit=3` : `${apiUrl}/jobs`
            try {
                const res = await fetch(finalApiUrl);
                const data = await res.json();
                setJobs(data);                
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        } 
        fetchJobs();
    }
        ,[]
    );
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {heading}
                </h2>
                {
                    isLoading ? <Spinner loading={isLoading}/> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        jobs.map(job =>
                            <JobListItem key={job.id} job={job}/>
                        )
                    }
                </div>
                }                
            </div>
        </section>
    )
}

export default JobListings