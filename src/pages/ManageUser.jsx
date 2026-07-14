import {useState,useEffect} from "react";
import {getAllusers,Blockuser,Unblockuser,removeUser} from "services/authService";
function ManageUser(){
	const[users,setUsers]=useState([]);
	const[loading,setLoading]=useState(false);
	const[actionLoading,setActionLoading]=useState(null);
	const fetchUsers=async()=>{
		try{
			setLoading(true);
			const response=await getAllusers();
			setUsers(response.data);
		}catch(error){
			console.log(error.message);
		}finally{
			setLoading(false);
		}
	};
	const HandleBlock=async(userID)=>{
		try{
			setActionLoading(userID);
			const response=await Blockuser(userID);
			fetchUsers();

		}catch(error){
			console.log(error.message);
		}
	};
	const HandleUnblock=async(userID)=>{
		try{
			setActionLoading(userID);
			const response=await unBlockuser(userID);
			fetchUsers();

		}catch(error){
			console.log(error.message);
		}
	};
	const Removeuser=async(userID)=>{
		try{
			const response=await removeUser(userID);
			fetchUsers();
		}catch(error){
			console.log(error.message);
		}

	};

	useEffect(()=>{
		fetchUsers();
	},[]);
	if(loading){
		return <h2 className="d-flex text-align-center">loading...</h2>
	}

	return(
   <div className="container">
   	<h2>Manage Users</h2>
   	<table className="table">
   		  	<thead>
           		<tr>
           			<th>ID</th>
           			<th>Name</th>
           			<th>Email</th>
           			<th>Role</th>
           			<th>Status</th>
           			<th>Action</th>
           		</tr>
           	</thead>
           	<tbody>
   	{
   		Array.isArray(users)&&
   		users.map((user)=>(
           		<tr key={user.id}>
           			<td>{user.id}</td>
           			<td>{user.name}</td>
           			<td>{user.email}</td>
           			<td>{user.role}</td>
           			<td>
           				{
           					user.is_blocked?
           					<span >Blocked</span>:
           					<span>Active</span>
           				}
           			</td>
           			<td>
           				{
           					user.is_blocked?
           			     	<button className="btn btn-success btn-sm" disabled={actionLoading===user.id} onClick={()=>HandleUnblock(user.id)}>
           			     		{
           			     			actionLoading===user.id?
           			     			"Updating":
           			     			"Unblock"
           			     		}
           			     	</button>:
           				    <button className="btn btn-danger btn-sm ms-2" disabled={actionLoading===user.id} onClick={()=>HandleBlock(user.id)}>
           				    	{
           				    		actionLoading===user.id?
           				    		"Updating":
           				    		"Block"
           				    	}
           				    </button>
           				}
           				<button className="btn btn-danger btn-sm ms-2" diasbled={actionLoading===user.id} onClick={()=>Removeuser(user.id)}>
           					Remove
           				</button>
           			</td>
           		</tr>
                     
   			))

   	}
     		</tbody>
   	 </table>
   </div>
		);
};
export default ManageUser;