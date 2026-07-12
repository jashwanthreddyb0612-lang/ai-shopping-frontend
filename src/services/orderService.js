import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const placeorder=async()=>{
	const token=localStorage.getItem("token");
	return await axios.post(
   `${API}/orders/createorder`,
    {},
    {
    	headers:{
    		Authorization:`Bearer ${token}`
    	}
    }


		);
   
};

export const getorders=async()=>{
	const token=localStorage.getItem("token");
	return await axios.get(
  `${API}/orders/vieworders`,
  {
  	headers:{
  		Authorization:`Bearer ${token}`
  	}
  }


		);
  
};

export const getorderdetails=async({orderID})=>{

	const token=localStorage.getItem("token");
	return await axios.get(
   `${API}/orders/vieworderdetails/${orderID}`,
   {
   	headers:{
   		Authorization:`Bearer ${token}`
   	}
   }


		);
 
};

export const getlatestorders=async()=>{
	const token=localStorage.getItem("token");
	return await axios.get(
 `${API}/dashboards/latestorders`,
{
	headers:{
		Authorization:`Bearer ${token}`
	}
}


		);

};

export const getbestcustomer=async()=>{
	const token=localStorage.getItem("token");
	return await axios.get(
 `${API}/dashboards/bestcustomer`,
{
	headers:{
		Authorization:`Bearer ${token}`
	}
}


		);

};


export const updateorderstatus=async(orderID,status)=>{
	
	const token=localStorage.getItem("token");
	return await axios.post(
 `${API}/dashboards/updatestatus`,
 {orderID,status},
{
	headers:{
		Authorization:`Bearer ${token}`
	}
}


		);

};