import {useState,useContext} from "react";
import {loginUser} from "../services/authService";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
function Login(){
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const navigate=useNavigate();
const {setToken}=useContext(AuthContext);
 const handleSubmit =async(e)=>{
       e.preventDefault();
       try{
          const response=await loginUser({
            email,
            password
          });
          localStorage.setItem(
             "token",
             response.data.token
            );

    
localStorage.setItem("user", JSON.stringify(response.data.data));

          setToken(response.data.token);
          navigate("/");

       }catch(error){
            console.log(error.message);

       }
      
 };


	return(
     <div className="container mt-5 ">
     	<h1>Login</h1>
     	<form onSubmit={handleSubmit} >
     		<div className="mb-3">
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
            <button className="btn btn-primary mt-2">login</button>
        </div>
     	</form>
     </div>
		);
}
export default Login;