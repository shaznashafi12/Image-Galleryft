import React from 'react'
import Nav from './Nav'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { uploadImage } from "./api/api.js";
import { FiCheckCircle } from "react-icons/fi";

const categories = [
  {id:'nature',label:'Nature'},
  {id:'urban',label:'Urban'},
  {id:'people',label:'People'},
  {id:'travel',label:'Travel'},
]
const Upload = () => {
    const[category,setCategory]=useState('')
    const[file,setFile]=useState(null);
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[loading,setloading]=useState(false);
    const[uploaded,setuploaded]=useState(false)
    const[preview,setPreview]=useState(null)

const handleUpload=async()=>{
  if(!file||!title||!description){
    alert("all fields required");
    return;
  }
  const formData=new FormData();
  formData.append("image",file);
  formData.append("title",title)
  formData.append("description",description);
 formData.append("category",category)
  try{
    setloading(true);
    await uploadImage(formData);
    setuploaded(true)
    toast.success("Uploaded successfully");
    setFile(null);
    setTitle("");
    setDescription("");
    setTimeout(() =>{
      setuploaded(false);
         setPreview(null);

    },3000);
  }
  catch(err){
    console.log(err);
        

toast.error("upload failed")
    
  }
   finally{setloading(false);
  }};

  return (
    <div>
       <Nav/>
           <div className='min-h-screen bg-[#F5F1EC] flex flex-col items-center py-12 px-4'>

        <div className='w-full max-w-xl'>
            <h1 className='text-3xl font-bold mt-15 font-serif text-[#6F4E37]'>Upload Image</h1>
         <p className='text-gray-500 font-semibold text-sm mb-6'>Share a new photo with the community</p>
<label 
  htmlFor='fileInput'
  className='w-full border-2 border-dashed border-gray-300 rounded-xl bg-white cursor-pointer flex flex-col items-center justify-center py-16 mb-6 hover:border-gray-400 transition-colors'
>   
{uploaded?(
  <div className='flex flex-col items-center text-green-600'>
<FiCheckCircle className='text-3xl text-green-500' /> 
    <p className='text-[15px] font-medium text-gray-900'>Image uploaded</p>
</div>
): preview ? (
  <>
  <img 
    src={preview} 
    alt='preview' 
        className='h-[300px] w-[300px] object-cover rounded-lg flex-shrink-0'
  />
    <div>
        <p className='text-sm font-medium text-gray-800'>Image selected</p>
        <p className='text-xs text-gray-400'>Click to change</p>
      </div>
      </>
) : (
  <>
   <svg className='w-7 h-7 text-gray-400' fill='none' stroke='currentColor' strokeWidth='1.5' viewBox='0 0 24 24'>
      <rect x='3' y='3' width='18' height='18' rx='2' />
       <circle cx='8.5' cy='8.5' r='1.5' />
       <path d='M21 15l-5-5L5 21' />
      </svg>
       <p className='font-semibold text-gray-800'>
        Drag & drop your image here</p>
       <p className='text-sm text-gray-400 mt-1'>
        or click to browse • PNG, JPG, WebP</p>
                       </>

                         )}                
                                </label>

        <input 
        type='file' 
        id='fileInput'
onChange={(e)=>{
  const select=e.target.files[0]
  setFile(select)
if(select){
  setPreview(URL.createObjectURL(select))
}}
}
        className='hidden'/>
        <div className='mb-2'>
            <label className='mb-2 ml-1 block text-sm font-semibold text-gray-800'>
                Title
            </label>
            <input type='text' placeholder='give your image a title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-full border  text-start h-14 items-center justify-center  bg-white border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]'
>
            </input>

        </div>
 <div className='mb-6'>
            <label className='ml-1 mb-2 block text-sm font-semibold text-gray-800'>
                Description
            </label>
            <textarea type='text' placeholder='Describe your image...'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className='bg-white h-20 w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]'
>
            </textarea>
              <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Category
            </label>

            <div className='flex gap-2'>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type='button'
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-sm rounded-lg border  
                    ${category === cat.id
                      ? 'bg-[#6F4E37] text-white border-[#6F4E37]'
                      : 'bg-white text-gray-600 border-gray-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            </div>

        </div>
        <button onClick={handleUpload}
        className='w-full bg-[#6F4E37] hover:bg-[#5c402d] text-white font-semibold py-3 rounded-xl
         flex items-center justify-center gap-2 
         transition-colors'>Upload Image
            </button>
            </div>

        </div>
        </div>

  )
}

export default Upload