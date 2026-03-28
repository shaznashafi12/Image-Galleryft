import React, { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { FiMenu, FiUpload, FiX } from "react-icons/fi";
import { MdDashboard ,MdOutlinePhotoLibrary } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const[open,setopen]=useState(false)
  const navigate=useNavigate();
  const handlLogout=()=>{
    localStorage.removeItem("token");
        localStorage.removeItem("user");

    setopen(false);
    navigate("/login");
  };
  const location=useLocation()
  const active=(path)=>location.pathname===path
    return (
    <div className='w-full fixed shadow-xl bg-[#f7f4f0] px-6 py-3 z-50'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
          <div className='bg-[#6F4E37] flex items-center justify-center  p-3 rounded-xl shadow-md'>
            <IoCameraOutline className='text-white text-sm'/>
          </div>
<h1
  className='text-xl font-semibold tracking-wide'
  style={{
    fontFamily:"'Playfair Display', Georgia, serif", background:"linear-gradient(to right,#4a1f08,#c49a6c)",
     WebkitBackgroundClip:"text",
 WebkitTextFillColor:"transparent",
    backgroundClip:"text",
  }}
>
  Framely
</h1>
</div>
      <div className='hidden md:flex items-center gap-6 text-black font-medium'>
    <Link to='/gallery'>
     <button className={`flex items-center text-sm gap-2 ${active('/gallery')? 'text-[#6F4E37] font-semibold':'text-black hover:text-[#6F4E37]'}`} >
          <MdOutlinePhotoLibrary /> Gallery
        </button>
        </Link>
        <Link to='/upload'>
     <button className={`flex items-center text-sm gap-2 ${active('/upload')? 'text-[#6F4E37] font-semibold':'text-black hover:text-[#6F4E37]'}`} >
          <FiUpload />
          Upload
        </button>
        </Link>
      <Link to='/dashboard'>

     <button className={`flex items-center text-sm gap-2 ${active('/dashboard')? 'text-[#6F4E37] font-semibold':'text-black hover:text-[#6F4E37]'}`} >
          <MdDashboard />
          Dashboard
        </button>
        </Link>
     <div className='h-6 w-px bg-gray-300'></div>
 <button onClick={handlLogout}
 className='flex items-center gap-2 text-sm text-black hover:text-red-800'>
          <FiLogOut />
          Logout
        </button>
      </div>
      <button
      className="md:hidden text-gray-700 text-2xl"
      onClick={()=>setopen(!open)}>
        {open?<FiX/>:<FiMenu/>}
      </button>
    </div>
    {open && (
        <div className='md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-200 pt-4 text-black font-medium '>
     <Link to='/gallery'
             onClick={()=>setopen(false)}>

     <button className={`flex items-center text-sm gap-2 ${active('/gallery')? 'text-[#6F4E37] font-semibold':'text-black hover:text-[#6F4E37]'}`} >
  <MdOutlinePhotoLibrary className='text-base'/> Gallery
</button>
</Link>

        <Link to='/upload'
        onClick={()=>setopen(false)}>
     <button className={`flex items-center text-sm gap-2 ${active('/upload')? 'text-[#6F4E37] font-semibold':'text-black hover:text-[#6F4E37]'}`} >
        <FiUpload/>Upload</button>
        </Link>
        <Link to='/dashboard'
        onClick={()=>setopen(false)}>
     <button className={`flex items-center text-sm gap-2 ${active('/dashboard')? 'text-[#6F4E37] font-semibold':'text-black hover:text-[#6F4E37]'}`} >
        <MdDashboard/>Dashboard</button>
        </Link>
        
          <button onClick={handlLogout}
           className='flex items-center gap-2 hover:text-red-800 text-sm text-black'>
        <FiLogOut/>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Nav;