import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { regg } from "./api/api.js"; 
import img1 from './images/girl.jpg'
import img2 from './images/vin.jpg'
import img3 from './images/photog.jpg'
import { IoCameraOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bg from './images/girls.jpg'
const Signup=()=>{
    const [form,setForm]=useState({
  name:"",
  email:"",
  password:"",
  confirmPassword:""
});

const[showPassword,setShowPassword]=useState(false);
const[showConfirmPassword,setShowConfirmPassword]=useState(false);
const[error,setError]=useState("");
const navigate = useNavigate();
const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
};
    
const handleSubmit =async(e)=>{
    e.preventDefault();
    if(form.password!==form.confirmPassword){
        setError("Password do not match");
        return;
    }
    try{
        const res=await regg({
            name:form.name,
            email:form.email,
            password:form.password
        });
toast.success("User registered successfully");

setTimeout(()=>{
  navigate("/gallery");
}, 1500);  
  console.log(res.data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data));
    }
    catch(err){
        setError(err);
            toast.error("Registration failed ❌");

    }
}

const polaroids=[
     {src:img1,rotate:"-rotate-3",label:"golden hour"},
    {src:img2,rotate:"rotate-2",label:"mountain mist"},
     {src:img3,rotate:"-rotate-2",label:"ocean calm"},
          ];
          return (
            <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='flex-col flex md:flex-row w-full h-screen'>
                <div className='w-full h-[400px] md:w-1/2  md:h-screen bg-cover bg-center relative'
                style={{backgroundImage:`url(${bg})`}}>
        
                    <div className='absolute inset-0 bg-black/50 h-full'>
                        <div className='relative z-10 flex flex-col 
                        items-start  pl-6 md:pl-10
                        justify-start md:pl-10 gap-3.5 
                         md:justify-center pt-6 md:pt-0  w-full h-full '>
       <div className='flex flex-col mt-10  items-start  gap-2 md:gap-3.5'>
        {polaroids.map(({src,rotate,label})=>(
            <div key={label}
            className={`${rotate} bg-white p-1.5 md:p-2 pb-5 md:pb-7 rounded-sm
             shadow-2xl w-20 md:w-36 transition-transform 
             duration-300 hover:scale-105 hover:z-10 
             cursor-pointer relative`}>
                <img src={src} alt={label}
                className='w-full h-16 md:h-32 object-cover rounded-[2px] block'/>
        </div>
        ))}
        </div>
    <div className='ml-10 absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-8'>
        <h2 className='text-white text-4xl font-bold text-center leading-tight tracking-tight'>
            Start.<br/><span className='text-[#b9a39c]'>Create.</span><br/>
            Inspire.
          </h2>
        
          <p className='text-white/60 text-sm text-center mt-4 max-w-[220px] leading-relaxed'>
  Join a space where your moments turn into stories worth sharing.
          </p>
        </div></div>
        </div>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center overflow-y-auto px-4'>
            <div className='bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md text-left'>
                  <div className='flex flex-col items-center gap-3 '>
          <div className='bg-[#6F4E37] p-3 rounded-xl shadow-md'>
            <IoCameraOutline className='text-white text-xl'/>
          </div>
        
          <h1 className='text-3xl mb-0 font-semibold text-gray-800 text-center'>
Create an account
          </h1>
        </div>
        
        <p className='text-gray-500 text-center mb-6'>
Join Framely and start sharing your photos

        </p>
        <form onSubmit={handleSubmit}>
                <label className='text-sm font-medium text-gray-700'>
                    Full name
                </label>
                <input type='text'
                name='name'
                 value={form.name}
              onChange={handleChange}
                placeholder='Enter your Name'
                className='w-full mt-2 bg-gray-100 mb-4 px-4 py-3 rounded-lg border border-2 border-gray-200 focus:outline-none  focus:ring-2 focus:ring-[#6F4E37]'/>                <label className='text-sm font-medium text-gray-700'>
                    Email
                </label>
                <input type='email'
                name='email'
                 value={form.email}
                 onChange={handleChange}
                placeholder='Enter your Email'
                className='w-full mt-2 bg-gray-100 mb-4 px-4 py-3 rounded-lg border border-2 border-gray-200 focus:outline-none  focus:ring-2 focus:ring-[#6F4E37]'/>                <div className='relative'>
                <label className='text-sm font-medium text-gray-700'>
                    Password
                    </label>
         <input  type={showPassword?"text":"password"}
         name='password'
         value={form.password}
         onChange={handleChange}
                      placeholder="••••••••"
    className="w-full mt-2 bg-gray-100 mb-4 px-4 py-3 pr-10 rounded-lg border border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
/>                  <span onClick={()=>setShowPassword(!showPassword)}
    className="absolute right-3 top-[60%] -translate-y-1/2 cursor-pointer text-gray-500"
>                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}

                </span>
                </div>
                                <div className='relative'>
  <label className="text-sm font-medium text-gray-700">
                    Confirm Password
                    </label>
         <input type={showConfirmPassword?"text":"password"}
         name='confirmPassword'
         onChange={handleChange}
         value={form.confirmPassword}
                      placeholder="••••••••"
    className="w-full mt-2 bg-gray-100 mb-4 px-4 py-3 pr-10 rounded-lg border border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
/>                
                <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-[60%] -translate-y-1/2 cursor-pointer text-gray-500"
>                        {showConfirmPassword ? <IoEyeOffOutline/>:<IoEyeOutline/>}

                </span>
                </div>

        
        <div>
            <button type='submit'
             className='w-full text- hover:bg-[#755137] py-3 rounded-lg font-medium transition bg-[#6F4E37] text-white'>
                Sign up</button>
            <p className='text-center text-gray-500 text-sm mt-4'
            >Already have an account?{""}
            <Link to='/login'>
           
                <span className='text-[#6F4E37] cursor-pointer hover:underline '>
                    Sign in
                </span>
                </Link> 
                 {error && (
  <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
)}           </p>
        </div>
        </form>
               </div>
                </div>
            </div>
            </div>
        
  )
}

export default Signup