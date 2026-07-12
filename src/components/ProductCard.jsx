import {Link} from "react-router-dom";
function ProductCard({product}){
	return(
    <div className="card h-100 ">
       	<img src={product.image}
             className="card-img-top"
             alt={product.name}
        />
        <div className="card card-body">
            <h5>{product.name}</h5>
            <p>Rs. {product.price}</p>
            <Link to={`/product/${product.id}`} className="btn btn-primary">view details</Link>
        </div>
  	</div>
		);

};
export default ProductCard;