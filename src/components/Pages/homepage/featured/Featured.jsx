import { useEffect, useState } from "react";
import FeaturedJobs from "./featureJOB/FeaturedJobs";

const Featured = () => {
       const [jobs,setJob]=useState([]);
       useEffect(()=>{
           const loadData=async()=>{
             const res=await fetch('/jobs.json')
             const data=await res.json()
             setJob(data)
           }
           loadData()
       },[])
   
       const[dataLength,setDataLength]=useState(4)


    return (
        <div>
             <div>
             <h1  className="text-center font-bold text-[#000] text-4xl">Featured Jobs </h1>
             <p  className="text-center font-semibold text-[#757575] ">Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>

             <div className="grid lg:grid-cols-2 my-10 gap-6">
                {
                    jobs.slice(0,dataLength).map(job=><FeaturedJobs key={job.id} job={job}></FeaturedJobs>)
                }
             </div>


          <div className={dataLength===jobs.length && 'hidden'}>
          <button onClick={()=>setDataLength(jobs.length)} className=" mb-7 btn bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-[500px]">See All Jobs</button>
          </div>
        </div>
    );
};

export default Featured;