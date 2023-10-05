import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import useConPri from "../../../Hooks/useConPri";

const Login = () => {
         
    const navigate=useNavigate()

    const [showPassword,setShowPassword]=useState(true)
    const {googleSignIn,LogIn}=useConPri()
const handleLogin=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    LogIn(email,password)
    .then(result=>{
        console.log(result.user)
        navigate('/')

    })
    .catch(error=>{
        console.log(error)
    })
}

const handleGoogleSignUp=()=>{

    googleSignIn()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
}

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
       <div>
      <div className="relative">

      <input type={ showPassword?"text":"password"} name="password"  placeholder="password" className="input input-bordered w-full" required />

      <span onClick={()=>setShowPassword(!showPassword)} className=" absolute top-4 right-1">{showPassword?<AiFillEyeInvisible></AiFillEyeInvisible>:<AiFillEye></AiFillEye>}</span>

      </div>
       
       </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div>
           <p className="text-center font-bold text-xl border-b-2 border-black pb-5">Sing up with</p>
           <button onClick={handleGoogleSignUp} className="btn  m-4 p-1">Google</button>
      </div>

      <p className="text-center mb-5">new here? go to <Link className="text-blue-400" to='/register'>register</Link></p>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Login;