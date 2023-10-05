import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Homepage from "../Pages/homepage/Homepage";
import Statistic from "../Pages/Statistic/Statistic";
import Blog from "../Pages/Blog/Blog";
import AppliedJobs from "../Pages/Applied jobs/Applied Jobs";
import JobDetail from "../Pages/homepage/featured/featureJOB/JobDetail/JobDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../../Private/PrivateRoute";




const myRouter=createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorPage></ErrorPage>,
      element:<Root></Root>,

      children:[
        {
          path:'/',
          element:<Homepage></Homepage>

        },
        {
          path:'/statistic',
          element:<Statistic></Statistic>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/applied',
          element:<AppliedJobs></AppliedJobs>,
          loader:()=>fetch('/jobs.json')
          

        },
        {
          path:'/job/:id',
          element:<PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
          loader:()=>fetch('../jobs.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
        
      ]
    }
])


export default myRouter;