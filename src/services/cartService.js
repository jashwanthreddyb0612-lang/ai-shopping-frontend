import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const addToCart=async({productID,quantity=1})=>{
	const token=localStorage.getItem("token");
	return await axios.post(
    `${API}/carts/addtocart/${productID}`,
    {

        quantity
    },

    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }



		);
    
    
};
export const viewCart=async()=>{
	const token=localStorage.getItem("token");
	return await axios.get(
    `${API}/carts/viewcart`,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }

		);
	

};


export const increasequantity=async(productID)=>{
	const token=localStorage.getItem("token");
	return await axios.put(
    `${API}/carts/increasequantity/${productID}`,
    {},
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }

		);
};

export const decreasequantity=async(productID)=>{

	const token=localStorage.getItem("token");
	return await axios.put(
     `${API}/carts/decreasequantity/${productID}`,
     {},
     {
     	headers:{
     		Authorization:`Bearer ${token}`
     	}
     }
		);
};


export const removeitem=async(productID)=>{
	const token=localStorage.getItem("token");
	return await axios.delete(
    `${API}/carts/removeitem/${productID}`,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }


		);
    
};