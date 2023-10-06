import { Link, useLocation } from "react-router-dom";
import useConPri from "../Hooks/useConPri";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loading}=useConPri()
    const location=useLocation()
    console.log(location)
    
    if(loading){
     return  <div className=" text-center mt-32">
        <span className="loading loading-infinity loading-lg"></span>
     </div>

     
    }

    if(user){

        return  children;
    }

    return <div className="text-4xl font-bold text-center mt-40">please login in first ....... go to <Link state={location.pathname} className="text-blue-700 underline" to='/login'>LogIn</Link></div>
}
PrivateRoute.propTypes={
    children:PropTypes.node,
}
export default PrivateRoute;