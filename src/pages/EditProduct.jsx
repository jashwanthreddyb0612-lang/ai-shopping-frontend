import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {getProductById,updateproduct} from "../services/productService";
function EditProduct(){
    const {productID}=useParams();
    const navigate=useNavigate();
	const[product,setProduct]=useState();
	const[name,setName]=useState("");
	const[price,setPrice]=useState();
	const[stock,setStock]=useState();
	const[description,setDescription]=useState("");
	useEffect(()=>{
		fetchProduct();
	},[]);
	const fetchProduct=async()=>{
		try{
             const response=await getProductById(productID);
             const product=response.data;
             setName(product.name);
             setPrice(product.price);
             setStock(product.stock);
             setDescription(product.description);


		}catch(error){
			console.log(error.response.data);

		}
	};
	const handleSubmit=async(e)=>{
		e.preventDefault();
		try{
			await updateproduct(
				productID,
				{
				   name,
				   price,
				   stock,
				   description
				}
				);
			navigate("/admin/allproducts");


		}catch(error){
			console.log(error.response.data);

		}
	}
	return(
     <div className="container mt-5 mb-3">
     	<h2>Update Product</h2>
     	<form onSubmit={handleSubmit}>
     
     	<label>Name</label>
     		<input
     			className="form-control  mb-3 "
     			value={name ||""}
     			onChange={(e)=>setName(e.target.value)}
     		/>
        <label>Price</label>
     		<input 
     			className="form-control mb-3"
     			value={price ||""}
     			onChange={(e)=>setPrice(e.target.value)}
     		/>
     		<label>Stock</label>
     		<input
     			className="form-control mb-3"
     			value={stock ||""}
     			onChange={(e)=>setStock(e.target.value)}
     		/>
        <label>Description</label>
     		<input
     			className="form-control mb-3"
     			value={description ||""}
     			onChange={(e)=>setDescription(e.target.value)}
     		/>
     		<button className="btn btn-success " >update</button>
    
     	</form>
     </div>
		);
};
export default EditProduct;