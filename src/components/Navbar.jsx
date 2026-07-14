import {Link,useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
function Navbar(){

	const {token,setToken}=useContext(AuthContext);
	const navigate=useNavigate();

	return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    	<div className="container">
    		<Link className="navbar-brand" to="/">AI SHOPPING</Link>
    		<div className="navbar-nav ms-auto">
    			<Link className="nav-link" to="/">Home</Link>
    			<Link className="nav-link" to="/register">Register</Link>
    			<Link className="nav-link" to="/cart">Cart</Link>
    			<Link className="nav-link" to="/wishlist">Wishlist</Link>
    			<Link className="nav-link" to="/orders">Orders</Link>
    			<Link className="nav-link" to="/dashboard">AdminDashboard</Link>
    			<Link className="nav-link" to="/admin/allproducts">ManageProducts</Link>
    			<Link className="nav-link" to="/addproduct">AddProduct</Link>
    			<Link className="nav-link" to="/manageusers">ManageUser</Link>
    			{
    			
    				token?(
    					<>
    					   <Link className="nav-link" to="/profile">Profile</Link>
    				       <button className="btn btn-danger ms-2" onClick={()=>{localStorage.removeItem("token");
    				                                                             setToken(null); 
    				                                                             navigate("/login"); } }>Logout</button>
    				    </>
    				)
    				:(
    					<Link className="nav-link" to="/login">Login</Link>
    					)
    			
    			}
    		</div>
    	</div>

    </nav>

		);
}
export default Navbar;