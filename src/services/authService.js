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
