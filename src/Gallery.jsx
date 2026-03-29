import React,{useEffect,useState} from 'react'
import Nav from './Nav'
import {getmyimages} from './api/api.js'

const Gallery=()=>{
const [selectedImage,setSelectedImage]=useState(null)
const [filter,setFilter]=useState('All')
const [sort,setSort]=useState('newest')
const [images,setimages]=useState([])

const getFilteredImages=()=>{
  let data=images
    if(filter!=='All'){
     data=data.filter(img=>img.category?.toLowerCase()===filter.toLowerCase())
    }
      return data
    };

const getSortedImages=(data)=>{
        let sorted=[...data]
        sorted.sort((a,b)=>{
const dateA=a.createdAt?new Date(a.createdAt):0
const dateB=b.createdAt?new Date(b.createdAt):0
        if(sort==='newest'){
          return dateB-dateA
        }
           else{
              return dateA-dateB
           }
        })
             return sorted
        }

    useEffect(()=>{
        const fetchimages=async()=>{
            try{
               const res=await getmyimages()
                console.log('API response:',res.data)
                setimages(res.data.images||res.data||[])
               }catch(err){
                  console.log(err)
               }
             }
              fetchimages()
              },[])

    const filtered=getFilteredImages()
    const sortedImages=getSortedImages(filtered)
return(
    <div>
        <Nav/>
  <div className='p-6 min-h-screen bg-gradient-to-br from-[#faeedf] to-[#f9f6f4]'>
    <h1 className='text-4xl mt-18 font-bold font-serif text-[#6F4E37] mb-1'>Gallery</h1>
     <p className='text-gray-500 mb-4'>
          {images.length} photos shared by the community</p>
<div className='flex flex-col sm:flex-row sm:items-center gap-3 mb-6'>
   <div className='flex flex-wrap gap-2'>
    {['All','Nature','Urban','Travel'].map(cat=>(
        <button key={cat} onClick={()=>setFilter(cat)} className={`px-4 py-1 rounded-full text-sm
           ${filter===cat?'bg-[#6F4E37] text-white':'bg-gray-50 text-gray-700'}`}>{cat}</button>
        ))}
        </div>
 <div className='sm:ml-auto '>
    <div className='flex border border-2 w-fit border-gray-200 bg-gray-50 rounded-xl p-1'>
      <button onClick={()=>setSort('newest')}
       className={`px-3 py-1.5 rounded-lg text-sm ${sort==='newest'?'bg-white shadow':'text-gray-500'}`}>Newest</button>
        <button onClick={()=>setSort('oldest')}
         className={`px-3 py-1.5 rounded-lg text-sm ${sort==='oldest'?'bg-white shadow':'text-gray-500'}`}>Oldest</button>
    </div>
  </div>
        </div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
    {sortedImages.map(img=>(
      <div key={img._id} 
      onClick={()=>setSelectedImage(img)} 
      className='bg-white rounded-xl overflow-hidden shadow cursor-pointer'>
      <img src={img.imageUrl}
         className='w-full h-[250px] object-cover'/>
      <div className='p-4'>
        <h2>{img.title}</h2>
        <p className='text-sm text-gray-500'>
          {new Date(img.createdAt).toLocaleDateString()}</p>
     </div>
  </div>
   ))}
 </div>

{selectedImage&&(
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50' onClick={()=>setSelectedImage(null)}>
    <div className='bg-white rounded-2xl 
    max-w-3xl w-[92%] sm:w-full mx-auto overflow-hidden' 
    onClick={e=>e.stopPropagation()}>
    <img src={selectedImage.imageUrl} className='w-full h-[220px] sm:h-[350px] object-cover'/>
      <div className='p-6'>
        <h2 className='text-2xl font-bold'>
          {selectedImage.title}</h2>
        <p className='text-sm text-gray-500'>
          {new Date(selectedImage.createdAt).toLocaleDateString()} • {selectedImage.category}</p>
        <p className='mt-2 text-gray-700'>
          {selectedImage.description}</p>
        </div>
    </div>
  </div>
)}

   </div>
   </div>
  )
}

export default Gallery