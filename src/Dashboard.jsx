import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { deleteimage, getmyimages } from './api/api.js';
const Dashboard = () => {
  const[images,setimages]=useState([]);
  const[loading,setloading]=useState(true);
  const[view,setview]=useState("grid");
  const[galleryindex,setgalleryindex]=useState(null);
 
 
  const username=JSON.parse(localStorage.getItem("user"))?.name || "there";
const fetchimages=async()=>{
  try{
    const res=await getmyimages()
    setimages(res.data)
  }catch(err){
    console.log(err);
    toast.error("failed to load messages")
  }
  finally{
    setloading(false)
  }
}
useEffect(()=>{
fetchimages()
},[])

const handledelete=async(id,e)=>{
  e?.stopPropagation();
  if(!window.confirm("delete this image?"))return;

  try{
    await deleteimage(id)
    setimages((prev)=>prev.filter((img)=>img._id!==id));
    setgalleryindex(null);
    toast.success("deleted");
  }catch{
    toast.error("delete failed");
  }
};
  return (
   <div className='min-h-screen bg-[#F5F1EC]'>
      <Nav/>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <div className="mt-10 mb-8 bg-white rounded-xl p-5 flex justify-between items-center shadow-sm">
          <div>
            <h1 className="text-xl font-bold">
              Welcome, <span className="text-violet-600">{userName}</span>
            </h1>
            <p className="text-sm text-gray-400">
              {images.length} {images.length === 1 ? "photo" : "photos"}
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-violet-600 rounded-full animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            No photos uploaded
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {images.map((img, i) => (
              <div
                key={img._id}
                className="bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div
                  onClick={() => setGalleryIndex(i)}
                  className="h-48 overflow-hidden cursor-pointer"
                >
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                <div className="p-3">
                  <h2 className="font-semibold text-sm">{img.title}</h2>
                  <p className="text-xs text-gray-400 mb-3">
                    {img.description}
                  </p>

                  <button
                    onClick={() => handleDelete(img._id)}
                    className="w-full py-2 bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-600 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {galleryIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setGalleryIndex(null)}
        >
          <div
            className="relative max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[galleryIndex]?.imageUrl}
              className="max-h-[80vh] rounded-lg"
            />

            <button
              onClick={() => setGalleryIndex(null)}
              className="absolute top-2 right-2 bg-white/20 px-3 py-1 rounded text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;