import {useState,useEffect} from "react";
import {viewCart,increasequantity,decreasequantity,removeitem} from "../services/cartService";
import {placeorder} from "../services/orderService";
function Cart(){
	const[cartItems,setCartItems]=useState([]);
	console.log(cartItems);
	const fetchCart=async()=>{
		try{
			const response=await viewCart();
			setCartItems(response.data);

		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};
	const increaseQuantity=async(productID)=>{
		try{
			
			const response=await increasequantity(productID);
			fetchCart();
		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};
	const decreaseQuantity=async(productID)=>{
		try{
			
			const response=await decreasequantity(productID);
			fetchCart();
		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};
	const removeItem=async(productID)=>{
		try{
			const response=await removeitem(productID);
			fetchCart();
		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};
   const checkout=async()=>{
   	try{
          const response=await placeorder();
          alert(response.data.message);
          fetchCart();

   	}catch(error){
			console.log(error.response?.data||error.message);
		}
   }

	useEffect(()=>{
       
       fetchCart();
	},[]);
	return(
     <div className="container mt-5 ">
     	<h2>Cart Products</h2>
     	{
     		cartItems.map((item)=>(
     			<div className="card mt-3" key={item.id}>
     				<div className="card card-body" >
     					<h5>{item.name}</h5>
     					<p>Rs. {item.price}</p>
     					<div className="d-flex align-items-center gap-3 mb-2">
     						<button className="btn btn-secondary" onClick={()=>decreaseQuantity(item.product_id)}>-</button>
     						<span>{item.quantity}</span>
     						<button className="btn btn-success" onClick={()=>increaseQuantity(item.product_id)}>+</button>
     					</div>
     					
     					<button className="btn btn-danger" onClick={()=>{removeItem(item.product_id)}}>remove</button>
     					
     				</div>

     			</div>
     		))
     	}
     	<div className="mt-4">
          	<button className="btn btn-success" onClick={checkout}>checkout</button>
     	</div>
     </div>

		);
};
export default Cart;