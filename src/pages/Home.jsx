import {useState,useEffect} from "react";
import {getAllProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import {useNavigate } from "react-router-dom";
function Home(){
	const[products,setProducts]=useState([]);
	const navigate=useNavigate();
	const fetchProducts=async()=>{
		try{
			
			const user=JSON.parse(localStorage.getItem("user"));
			if(!user){
				navigate("/login",{replace:true});
				return;
			}
			const response=await getAllProducts();
			setProducts(response.data.data);
			console.log(response.data);
		}catch(error){
			console.log(error.response?.data||error.message);
		}
	};
	useEffect(()=>{
		fetchProducts();
	},[]);

	return(
    <div className="container ">
    	<h2>Products</h2>
    	<div className="row">
    		{
    			products.map((product)=>(
                  <div className="col-md-4 mb-4" key={product.id}>
                  	<ProductCard product={product} />
                  </div>
    				))
    		}
    	</div>
    </div>
		);
};
export default Home;