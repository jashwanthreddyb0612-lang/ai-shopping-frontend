import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {getProductById} from "../services/productService";
import {addToCart} from "../services/cartService";
import {addtowishlist} from "../services/wishlistService";
function ProductDetails(){
	const {productID}=useParams();
	const[product,setProduct]=useState(null);
    const fetchProduct=async()=>{
    	
    	try{
    		const response=await getProductById(productID);
    		setProduct(response.data);
    	}catch(error){
    		console.log(error.resonse?.data||error.message);
    	}
    	};
    const HandleAddToCart=async(productID)=>{
    	try{
    		const response=await addToCart({productID});
    		console.log(response.data);
    		alert("Product added to cart sucessfully");

    	}catch(error){
    		console.log(error.response?.data||error.message);
    	}
    };

    const addToWishlist=async(productID)=>{
  	try{
  		const response=await addtowishlist({productID});
  		alert("product added to wishlist successfully");

  	}catch(error){
  		console.log(error.resonse?.data||error.message);
  	}
  };

    

	useEffect(()=>{
     fetchProduct();
	},[]);

	if(!product){
		return <h3>Loading...</h3>
	}
	return(
     <div className="container mt-5">
     	<h2>Product Details</h2>
     	<div className="row mt-5">
     		<div className="col-md-6">
     			<img src={product.image}
     				 className="img-fluid"
     				 alt={product.name}
     		    />
     		</div>
     		<div className="col-md-6">
     			<h5>{product.name}</h5>
     	    	<p>Rs. {product.price}</p>
     	    	<p>{product.description}</p>
     	    	<p>{product.stock}</p>
     	        <button className="btn btn-success" onClick={()=>HandleAddToCart(product.id)}>Add To Cart</button>
     	        <button className="btn btn-warning ms-5" onClick={()=>addToWishlist(product.id)}>Add To Wishlist</button>

     		</div>
     	</div>
     
     </div>
		);
}
export default ProductDetails;