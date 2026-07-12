import {useState,useEffect} from "react";
import {getlatestorders,getbestcustomer,updateorderstatus} from "../services/orderService";
function AdminDashboard(){
	const[latestorders,setLatestorders]=useState([]);
	const[bestcustomers,setbestcustomers]=useState([]);
	const[orderstatus,setOrderstatus]=useState("");
	useEffect(()=>{
		fetchLatestorders();
		fetchBestcustomers();


	},[]);
	const statusChange=async(orderID,status)=>{

		try{
			const response=await updateorderstatus(orderID,status);
			setOrderstatus(response.data);
			fetchLatestorders();
		}catch(error){
			console.log(error.response?.data||error.message);
		}
	}
	const fetchLatestorders=async()=>{
		try{
			const response=await getlatestorders();
			setLatestorders(response.data);
		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};
	const fetchBestcustomers=async()=>{
		try{
			const response=await getbestcustomer();
			setbestcustomers(response.data);

		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};

	return(
    <div className="container mt-5">
    	<h2>Admin Dashboard</h2>
    	<h3 className="mt-5">Latest Orders</h3>
    		{
    			latestorders.map((order)=>(
                    <div className="card mt-3" key={order.id}>
                    	<div className="card card-body">
                    		<p>OrderID: {order.id}</p>
                    		<p>UserID: {order.user_id}</p>
                    		<p>Total_Amount:{order.total_amount}</p>
                    		<div className="d-flex align-items-center gap-2 ">
                    			<select 
                    				className="form-select"
                    				defaultValue={order.status}
                    				onChange={(e)=>(
                    					statusChange(order.id,e.target.value)
                    				)}
                    			>
                    				<option value="pending">Pending</option>
                    				<option value="processing">Processing</option>
                    				<option value="shipped">Shipped</option>
                    				<option value="delevered">Delevered</option>
                    				<option value="cancelled">Cancelled</option>
                    			</select>
                    		</div>
                    	</div>
                    </div>
    				))
    		}

    	<h3 className="mt-5">Best Customers</h3>
    	{
    		bestcustomers.map((customer,index)=>(
              <div className="card mt-3" key={index}>
              	<div className="card card-body">
              		<p>Customer Name:{customer.name}</p>
              		<p>Customer Spent:{customer.total_spent}</p>
              	</div>
              </div>
    			))
    	}
    </div>

		);
}
export default AdminDashboard;