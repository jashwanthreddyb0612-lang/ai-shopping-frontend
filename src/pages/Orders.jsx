import {useState,useEffect} from "react";
import {getorders} from "../services/orderService";
import {Link} from "react-router-dom";
function Orders(){
 const[orders,setOrders]=useState([]);
 const fetchOrders=async()=>{
 	try{

      const response=await getorders();
      setOrders(response.data);
 	}catch(error){
 		console.log(error.response?.data||error.message);
 	}
 }
 useEffect(()=>{
        
        fetchOrders();
 },[]);


 return(
   <div className="container mt-5">
   	<h2>Orders</h2>
   	{
   		orders.map((order)=>(
   				<div className="card mt-3" key={order.id}>
   					<div className="card card-body">
   						<Link to={`/orders/${order.id}`} className="text-decoration-none">
   						<h5>Order #{order.id}</h5>
   					</Link>
   						<p>Total: Rs. {order.total_amount}</p>
   						<p>Status: {order.Status}</p>
   					</div>

   	             </div>
        
   			))
   	}
   
   </div>
 	);
	
}
export default Orders;