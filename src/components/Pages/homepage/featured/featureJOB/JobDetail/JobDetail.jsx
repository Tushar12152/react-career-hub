import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../../../../utility/Localstorage";

const JobDetail = () => {
    const jobs=useLoaderData();
    const {id}=useParams()
    // console.log(id)
    const intId=parseInt(id)
    const job=jobs.find(job=>job.id===intId)
    console.log(job)
    const{job_responsibility,job_description,experiences,educational_requirements, salary,job_title,contact_information}=job;
    const { phone,email,address}=contact_information

    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate('/')
    }

    const handleToast=()=>{
        saveJobApplication(intId)
        toast('Your Application Submitted Succesfully')
    }
    return (
        <div>
               <div className="flex gap-6 mt-14">
                    <div className="w-[70%]">
                          <p className="font-bold  py-2">Job Description: <span className="text-gray-400 font-normal"> {job_description}</span></p>   

                          <p className="font-bold ">Job Responsibility: <span className="text-gray-400 font-normal"> {job_responsibility}</span></p>  

                          <p className="font-bold  py-2">Educational Requirements: <span className="text-gray-400 font-normal"> {educational_requirements}</span></p> 

                          <p className="font-bold  py-2">Experiences: <span className="text-gray-400 font-normal"> {experiences}</span></p> 


                    </div>
                    <div className="w-[30%]">
                            <div className="bg-gray-300 rounded">
                                  <h2 className="border-b-2 border-black font-bold w-[90%] mx-auto">Job Details</h2>
                                  <p  className="font-bold w-[90%] mx-auto p-2">salary:  <span className="text-gray-600 font-normal"> {salary}</span></p>
                                  <p  className="border-b-2  font-bold w-[90%] mx-auto p-2 ">Job Title:  <span className="text-gray-600 font-normal "> {job_title}</span></p>
                                  <h2 className="border-b-2 border-black font-bold w-[90%] mx-auto">Contact Information</h2>
                                  <p  className="font-bold w-[90%] mx-auto p-2">Phone:  <span className="text-gray-600 font-normal"> {phone}</span></p>

                                  <p  className="font-bold w-[90%] mx-auto p-2">Email:  <span className="text-gray-600 font-normal"> {email}</span></p>

                                  <p  className="font-bold w-[90%] mx-auto p-2">Address:  <span className="text-gray-600 font-normal"> {address}</span></p>

                            </div>
                            <button  onClick={handleToast} className='btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500  w-full mt-4'>Apply Now</button>
                            <ToastContainer />
                    </div>
               </div>
               <button  onClick={handleNavigate} className='btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500  ml-[500px] mt-12'>back</button>
        </div>
    );
};

export default JobDetail;