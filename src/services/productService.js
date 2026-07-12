import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const getAllProducts=async()=>{
	const token=await localStorage.getItem("token");
	return await axios.get(
    `${API}/products/allproducts`,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }

		);
   
};



export const getProductById=async(productID)=>{
	const token=await localStorage.getItem("token");
	return await axios.get(
   `${API}/products/viewproduct/${productID}`,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }
		);
};

export const getadminproducts=async()=>{
	const token=await localStorage.getItem("token");
	return await axios.get(
   `${API}/products/admin/allproducts`,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }
		);

};

export const deleteproduct=async(productID)=>{
	const token=await localStorage.getItem("token");
	return await axios.delete(
   `${API}/products/products/${productID}`,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }
		);

};

export const updateproduct=async(productID,productData)=>{
	const token=await localStorage.getItem("token");
	return await axios.put(
   `${API}/products/${productID}`,
   productData,

    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }
		);

};

export const addproduct=async(productData)=>{
	const token=await localStorage.getItem("token");
	return await axios.post(
   `${API}/products/products`,
   productData,
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }
		);

};

