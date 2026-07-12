import {useState,useEffect} from "react";
import {removewishlistitem,getwishlist} from "../services/wishlistService";
function Wishlist(){
  const[wishlist,setWishlist]=useState([]);
  const fetchWishlist=async()=>{
  	try{
  		const response=await getwishlist();
  		setWishlist(response.data);

  	}catch(error){
  		console.log(error.resonse?.data||error.message);
  	}
  };

  const removeWishlistItem=async(productID)=>{
  	console.log(productID);
  	try{
  		const response=await removewishlistitem({productID});
  		console.log(response.data);
  		fetchWishlist();
  	}catch(error){
  		console.log(error.response?.data||error.message);
  	}
  };


  useEffect(()=>{
  	fetchWishlist();

  },[]);


return(
    <div className="container mt-5">
    	<h2>Wishist Products</h2>
    	{
    		wishlist.map((item)=>(
                <div className="card mt-3" key={item.id}>
                	<div className="card card-body">
                		<h5>{item.name}</h5>
                		<p>Rs. {item.price}</p>
                		<button className="btn btn-danger" onClick={()=>removeWishlistItem(item.product_id)}>remove</button>
                	</div>
                </div>
    			))
    	};

    	
    </div>

	);


}

export default Wishlist;