import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
             <h1 className="text-center font-bold text-4xl mt-12"> Error Page</h1>
             <Link className="btn btn-primary ml-[600px] mt-10" to="/">go back to home</Link>
        </div>
    );
};

export default ErrorPage;