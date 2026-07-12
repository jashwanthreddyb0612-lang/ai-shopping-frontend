import {Routes,Route} from "react-router-dom";
 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProduct from "./pages/AdminProduct";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";

function App(){
  return(
    <>
       <Navbar />
  
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:productID" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:orderID" element={<OrderDetails />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/allproducts" element={<AdminProduct />} />
      <Route path="/admin/product/edit/:productID" element={<EditProduct />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>

  </>


    );
}
export default App;