import {useState} from "react";
import {registerUser} from "../services/authService";
import {useNavigate} from "react-router-dom";
function Register(){
	const[name,setName]=useState("");
	const[email,setEmail]=useState("");
	const[password,setPassword]=useState("");
    const[role,setRole]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await registerUser({name,email,password,role});
            console.log(response.data);
            navigate("/login");
        }catch(error){
            console.log(error.response?.data || error.message);
        }
    };

	return(
		  <div className="container mt-5">
    <h2>Register</h2>
     	<form onSubmit={handleSubmit}>
         <div className="mb-3">
     	    <label>Name</label>
     	    <input type="name"
     	    	   value={name}
     	    	   className="form-control"
     	    	   onChange={(e)=>setName(e.target.value)}
     	    	/>
            <label>Email</label>
            <input type="email"
            	   value={email}
            	   className="form-control"
            	   onChange={(e)=>setEmail(e.target.value)}
            	/>
            <label>Password</label>
            <input type="password"
                   value={password}
                   className="form-control"
                   onChange={(e)=>setPassword(e.target.value)}
                   />

            <label>Role</label>
            <select className="form-control"
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                     >
                         <option value="">---Select Role---</option>
                         <option value="customer">Customer</option>
                         <option value="Admin">Admin</option>
                </select>


             <button className="btn btn-success mt-2">register</button>

</div>

        </form>
     
</div>
		);
};
export default Register; 