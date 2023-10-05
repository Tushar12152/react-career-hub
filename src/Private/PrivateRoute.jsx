import { Link } from "react-router-dom";
import useConPri from "../Hooks/useConPri";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user}=useConPri()
    if(user){

        return  children;
    }

    return <div className="text-4xl font-bold text-center mt-40">please login in first ....... go to <Link className="text-blue-700 underline" to='/login'>LogIn</Link></div>
}
PrivateRoute.propTypes={
    children:PropTypes.node,
}
export default PrivateRoute;