import { IoCameraOutline } from "react-icons/io5";
import bg from './images/instagram.jpg'
import img1 from './images/photobo.jpg'
import img2 from './images/walp.jpg'
import img3 from './images/cat.jpg'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { logg } from "./api/api.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const Login = () => {
  const[form,setForm]=useState({
    email:"",
    password:""
  });
  const[error,setError]=useState("");
  const navigate=useNavigate();
const [showPassword, setShowPassword] = useState(false);
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };

  const handleSubmit=async(e)=>
  {
    e.preventDefault();

    try{
      const res=await logg(form);

       localStorage.setItem("user",JSON.stringify(res.data.user));
    localStorage.setItem("token",res.data.token);
    toast.success("Login successful");
    setTimeout(() => {
      navigate('/gallery')
    }, 1200);
  }
    catch(err){
setError(err?.message||err?.response?.data?.message|| "Login failed");      toast.error("Invalid credentials")
    }
  }
     const polaroids=[
    {src:img1,rotate:"-rotate-3",label:"golden hour"},
    {src:img2,rotate:"rotate-2",label:"mountain mist"},
    {src:img3,rotate:"-rotate-2",label:"ocean calm"},
  ];
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
<div className='flex flex-col md:flex-row w-full min-h-screen'>
        <div className='w-full h-[400px] md:w-1/2 md:h-screen bg-cover bg-center relative'

        style={{backgroundImage:`url(${bg})`}}>

            <div className='absolute inset-0 bg-black/50'>
<div className='relative z-10 flex flex-col items-start pl-6 md:pl-10 justify-start md:justify-center pt-6 md:pt-0 gap-3.5 w-full h-full md:py-10'>
{polaroids.map(({src,rotate,mt,label})=>(
    <div key={label}
    className={`${rotate} bg-white p-1.5 md:p-2 pb-5 md:pb-7 rounded-sm
     shadow-2xl w-20 md:w-36 transition-transform 
     duration-300 hover:scale-105 hover:z-10 
     cursor-pointer relative`}>
        <img src={src} alt={label}
        className='w-full h-16 md:h-32 object-cover rounded-[2px] block'/>
</div>
))}
<div className='absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-8'>
<h2 className='md:ml-2 text-white text-4xl font-bold text-center leading-tight tracking-tight'>
    Capture.<br/><span className='text-[#b9a39c]'>Curate.</span><br/>
    Share.
  </h2>

  <p className='md:ml-2 ml-10 text-white/60 text-sm text-center mt-3 max-w-[220px] leading-relaxed'>
      Upload, curate and share your photography with the world.
  </p>
</div></div>
</div>

</div>


<div className='w-full md:w-1/2 flex items-center justify-center py-4 md:py-8 px-4 overflow-y-auto'>
  <div className='bg-white p-5 md:p-8 rounded-2xl shadow-lg w-full max-w-md text-left my-4'>    
        <div className='flex flex-col items-center gap-3 '>
  <div className='bg-[#6F4E37] p-3 rounded-xl shadow-md'>
    <IoCameraOutline className='text-white text-xl'/>
  </div>

  <h1 className='text-3xl mb-0 font-semibold text-gray-800 text-center'>
    Welcome back
  </h1>
</div>

<p className='text-gray-500 text-center mb-6'>
  Sign in to your framely account
</p>
<form onSubmit={handleSubmit}>
        <label className='text-sm font-medium text-gray-700'>
            Email
        </label>
       <input
        type='email'
  name='email'
  value={form.email}
  onChange={handleChange}
  placeholder='Enter your Email'
        className='w-full mt-2 bg-gray-100 mb-4 px-4 py-3 rounded-lg border border-2 border-gray-200 focus:outline-none  focus:ring-2 focus:ring-[#6F4E37]'/>
               <div className="relative">

                <label className='text-sm font-medium text-gray-700'>
            Password
            </label>
 <input 
    type={showPassword?"text":"password"}
  name='password'
  value={form.password}
  onChange={handleChange}
        className='w-full mt-2 bg-gray-100 mb-1 px-4 py-3 rounded-lg border border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]'/>
         <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-[65%] -translate-y-1/2 cursor-pointer text-gray-500"
  >
    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
  </span>
  </div>
         <div className="text-right mb-2">
                <Link to="" className="text-sm hover:underline">
                  Forgot password?
                </Link>
              </div>
<div>
    <button type="submit"
className='w-full hover:bg-[#755137] py-3 rounded-lg font-medium transition bg-[#6F4E37] text-white'
>Login</button>   
 <p className='text-center text-gray-500 text-sm mt-4'
    >Don't have an account?{""}
    <Link to='/'>
        <span className='text-[#6F4E37] cursor-pointer hover:underline '>
            Sign up
        </span>
        </Link>
    </p>
    {error &&(
  <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
)}
</div>
</form>
       </div>
        </div>
    </div>
    </div>
  )
}

export default Login