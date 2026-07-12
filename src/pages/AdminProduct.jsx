import {useState,useEffect} from "react";
import {getadminproducts,deleteproduct,updateproduct} from "../services/productService";
import {Link} from "react-router-dom";
function AdminProduct(){
	const[products,setProducts]=useState([]);
	useEffect(()=>{

		fetchAdminproducts();
	},[]);
	const fetchAdminproducts=async()=>{
		try{
			const response=await getadminproducts();
			setProducts(response.data);
		}catch(error){
			console.log(error.response.data);
		}

	};
		

	const handleDelete=async(productID)=>{
		try{
			const response=await deleteproduct(productID);
		}catch(error){
		    console.log(error.response.data);
		}
	};
	


	return(
     <div className="container mt-5">
     	<h2>Manage Products</h2>
     	<table className="table">
     		<thead>
     			<tr>
     				<th>ID</th>
     				<th>Name</th>
     				<th>Price</th>
     				<th>Stock</th>
     				<th>Description</th>
     				<th>Actions</th>

     			</tr>
     		</thead>
     		<tbody>
     			{
     				products.map((product,index)=>(
                     <tr key={index}>
                     	<td>{product.id}</td>
                     	<td>{product.name}</td>
                     	<td>{product.price}</td>
                     	<td>{product.stock}</td>
                     	<td>{product.description}</td>
                        <td>
                     	    <Link to={`/admin/product/edit/${product.id}`}  className="btn btn-primary btn-sm">Edit</Link>
                     	    <button className="btn btn-danger btn-sm ms-2" onClick={()=>handleDelete(product.id)}>Delete</button>
                     	</td>
                     </tr>
     					))
     			}
     		</tbody>
     	</table>
     </div>

		);
};
export default AdminProduct;