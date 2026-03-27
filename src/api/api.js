import axios from "axios";

// const API_URL = "http://localhost:4000";
const API_URL=import.meta.env.VITE_BACKEND_URL;
// ------------------- USER AUTH -------------------
// Register
export const regg = async (data) => {
  try {
    return await axios.post(`${API_URL}/user/register`, data);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Login
export const logg = async (data) => {
  try {
    return await axios.post(`${API_URL}/user/login`, data);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const getUsers = async () => {
  try {
    return await axios.get(`${API_URL}/user/getAllUsers`);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const uploadImage = async (formData) => {
  try {
    const token=localStorage.getItem("token")
    return await axios.post(`${API_URL}/images/upload`,
      formData,
      {
        headers:{
          "Content-Type":"multipart/form-data",
          Authorization:`Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error.response?.data || error.message;
  }

};
export const getallimages = async () => {
  try {
    return await axios.get(`${API_URL}/images/get`);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const getmyimages = async () => {
  try {
    const token=localStorage.getItem("token");
    return await axios.get(`${API_URL}/images/my`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const deleteimage=async(id)=>{
  try{
    const token=localStorage.getItem("token");
    return await axios.delete(`${API_URL}/images/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
  }
  catch(error){
    throw error.response?.data||error.message;
  }
};


