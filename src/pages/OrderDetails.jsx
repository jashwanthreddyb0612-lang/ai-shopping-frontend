import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {getorderdetails} from "../services/orderService";
function OrderDetails(){
	const {orderID}=useParams();
	const[items,setItems]=useState([]);
    
const fetchOrderDetails=async()=>{
	try{
      const response=await getorderdetails({orderID});
      
      setItems(response.data);

	}catch(error){
		console.log(error.response?.data||error.message);
	}
}


	useEffect(()=>{
      fetchOrderDetails();

	},[]);


	return(
		<div className="container mt-5">
    	<h2>Order Details</h2>
    	{
    		items.map((item,index)=>(
              
              <div className="card mt-3" key={index}>
              	<div className="card card-body">
              		<h5>{item.name}</h5>
              		<p>Price: Rs.{item.price}</p>
              		<p>Quantity: {item.quantity}</p>
              	</div>
              </div>
    			))
    	};
    	</div>
  
		);
};
export default OrderDetails;