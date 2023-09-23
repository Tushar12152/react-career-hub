import PropTypes from 'prop-types';
import { AiOutlineDollar} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';
const FeaturedJobs = ({job}) => {
    // console.log(job)
    const{id,logo,job_title,location,company_name,remote_or_onsite,job_type,salary}=job;
    return (
        <div>
               <div className='border-2 rounded-lg p-10'>
                    <img className='w-[147.929px] h-[40px]' src={logo} alt="" />
                    <h1 className='text-2xl font-extrabold py-3 text-[#474747]'>{job_title}</h1>
                    <p className='text-xl text-[#757575] font-xl '>{company_name}</p>
                    <div className='flex gap-3 py-2'>
                         <button className='py-1 text-[#757575] px-4 border-2 border-[7E90FE] rounded'>{remote_or_onsite}</button>
                         <button className='py-1 text-[#757575] px-4 border-2 border-[7E90FE] rounded'>{job_type}</button>
                       </div>

                    <div className='flex gap-4 py-2'>
                            <span className='flex items-center gap-1 text-[#757575] font-semibold text-lg'>
                                    <GoLocation></GoLocation>
                                    <p>{location}</p>
                            </span>
                            <span className='flex items-center gap-1 text-[#757575] font-semibold text-lg'>
                                    <AiOutlineDollar></AiOutlineDollar>
                                    <p>{salary}</p>
                            </span>
                    </div>
                   <Link to={`/job/${id}`}>
                   <button className='btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>View Details</button>
                   </Link>
                 </div>  
        </div>
    );
};
FeaturedJobs.propTypes={
    job:PropTypes.object.isRequired
}

export default FeaturedJobs;