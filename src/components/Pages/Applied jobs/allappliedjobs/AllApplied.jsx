
const AllApplied = ({job}) => {
     const {logo,company_name,job_title}=job
    return (
        <div>
              <div className="border-2 border-green-300 p-5 rounded">
                   <img src={logo} alt="" />
                   <p className="font-bold text-4xl">{company_name}</p>
                   <p className="font-bold text-4xl">{job_title}</p>
                   
              </div>
        </div>
    );
};

export default AllApplied;