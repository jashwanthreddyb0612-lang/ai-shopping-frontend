import axios from "axios";
const API=import.meta.env.VITE_API_URL;

export const addtowishlist=async({productID})=>{
	const token=localStorage.getItem("token");
	return await axios.post(
    `${API}/wishlist/addproduct/${productID}`,
    {},
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }

		);
   
};


export const removewishlistitem=async({productID})=>{
	const token=localStorage.getItem("token");
	return await axios.delete(
   `${API}/wishlist/removeproduct/${productID}`,
   {
   	headers:{
   		Authorization:`Bearer ${token}`
   	}
   }


		);
   
};


export const getwishlist=async()=>{
	const token=localStorage.getItem("token");
	return await axios.get(
   `${API}/wishlist/viewproducts`,
  {
  	headers:{
  		Authorization:`Bearer ${token}`
  	}
  }


		);
};