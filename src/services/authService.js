import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const loginUser=async(userData)=>{
	return await axios.post(
       `${API}/users/login`,userData
		);
};
export const registerUser=async(userData)=>{
	return await axios.post(
   `${API}/users/register`,userData
		);
};
export const getAllusers=async()=>{
	const token=localStorage.getItem("token");
	return await axios.get(
   `${API}/users/viewusers`,
  {
  	headers:{
  		Authorization:`Bearer ${token}`
  	}
  }


		);
};
export const Blockuser=async(userID)=>{
	const token=localStorage.getItem("token");
	return await axios.post(
   `${API}/users/blockuser/${userID}`,
   {userID},

  {
  	headers:{
  		Authorization:`Bearer ${token}`
  	}
  }


		);
};
export const Unblockuser=async(userID)=>{
	const token=localStorage.getItem("token");
	return await axios.post(
   `${API}/users/unblockuser/${userID}`,
   {userID},
  {
  	headers:{
  		Authorization:`Bearer ${token}`
  	}
  }


		);
};
export const removeUser=async(userID)=>{
	const token=localStorage.getItem("token");
	return await axios.delete(
   `${API}/users/removeuser/${userID}`,
  
  {
  	headers:{
  		Authorization:`Bearer ${token}`
  	}
  }


		);
};
