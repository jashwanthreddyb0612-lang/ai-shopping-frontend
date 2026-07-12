import {useState} from "react";
import {addproduct} from "../services/productService";
import {useNavigate} from "react-router-dom";
function AddProduct(){
    const navigate=useNavigate();
	const[name,setName]=useState("");
	const[price,setPrice]=useState("");
	const[stock,setStock]=useState("");
	const[description,setDescription]=useState("");
	const[categoryID,setCategoryID]=useState("");
	
	const handleSubmit=async(e)=>{
		e.preventDefault();
		try{
			await addproduct(
				{
					name,
					price,
					stock,
					description,
					categoryID
				});
			navigate("/admin/allproducts");


		}catch(error){
			console.log(error.message);
		}

	}
	return(
		<div className="container mt-5 mb-3">
			<h2>Add Product</h2>
			<form onSubmit={handleSubmit}>
				<input
					className="form-control mb-3"
					placeholder="Product Name"
					value={name}
					onChange={(e)=>setName(e.target.value)}
				/>
				<input 
     			    className="form-control mb-3"
     			    placeholder="Product Price"
     			    value={price}
     			    onChange={(e)=>setPrice(e.target.value)}
     		    />
     		    <input
     			    className="form-control mb-3"
     			    value={stock }
     			    placeholder="Product Stock"
     			    onChange={(e)=>setStock(e.target.value)}
     		    />
     		    <input
     			    className="form-control mb-3"
     			    placeholder="Product Description"
     			    value={description}
     			    onChange={(e)=>setDescription(e.target.value)}
     		    />
     		    <input
     		    	className="form-control mb-3"
     		    	placeholder="Product CategoryID"
     		    	value={categoryID}
     		    	onChange={(e)=>setCategoryID(e.target.value)}
     		    />
     		    <button className="btn btn-success">addProduct</button>
			</form>
		</div>
		);
};
export default AddProduct;