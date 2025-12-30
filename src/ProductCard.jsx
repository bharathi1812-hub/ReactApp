import "./ProductCard.css";

function ProductCard(props) {

  const handleAddToCart = () => {
    alert(`${props.name} added to cart 🛒`);
     props.onAdd(); 
  };

  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">{props.price}</p>

      <button onClick={handleAddToCart}> Add to cart</button>
    </div>
  );
}

export default ProductCard;
