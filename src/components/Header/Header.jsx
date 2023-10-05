import { Link, NavLink } from "react-router-dom";
import useConPri from "../../Hooks/useConPri";
// import useConPri from "../../Hooks/useConPri";


const Header = () => {
  const {user,logOut}=useConPri()
  // console.log(user.email)

  const handleSignOut=()=>{
     logOut()
     .then(()=>{
      console.log('sign out success')
     })
     .catch(()=>{
      console.log('sign out faild')
     })
  }
const link= <>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/statistic">Statistics</NavLink></li>
                <li> <NavLink to="/applied">Applied Jobs</NavLink> </li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
           </>

    return (
        <div className="navbar bg-base-100 mt-2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
    <a className=" normal-case text-xl text-[#1A1919] font-extrabold ">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#757575]">
     {link}
    </ul>
  </div>
  <div className="navbar-end">

   { user?
  <div className="flex gap-6 items-center justify-center flex-row-reverse">
     <button onClick={handleSignOut} className="btn  bg-gradient-to-r from-violet-500 to-fuchsia-500">Sign Out</button>
   <p className="bg-yellow-300">{user?.email}</p>
  </div>:
   <Link to='/login'  className="btn  bg-gradient-to-r from-violet-500 to-fuchsia-500">Sign In</Link>}
  </div>
</div>
    );
};

export default Header;