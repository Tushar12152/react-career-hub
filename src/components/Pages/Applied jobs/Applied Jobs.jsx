import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/Localstorage";
import AllApplied from "./allappliedjobs/AllApplied";

const AppliedJobs = () => {
    const [applied,setApplied]=useState([])
    const jobs=useLoaderData();
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication();
        if(jobs.length>0){
            const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id));
            setApplied(jobsApplied)
        }
        
    },[])
    
     console.log(applied)

    return (
        <div>
             <div className="grid py-10 grid-cols-3 gap-6">
                 {
                    applied.map(job=><AllApplied key={job.id} job={job}></AllApplied>)
                 }
             </div>
           
        </div>
    );
};

export default AppliedJobs;