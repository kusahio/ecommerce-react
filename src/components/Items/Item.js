const Item = ({ product }) => {
    return (
      <ul>
        <img src={product.img} alt="Product" />
        <li>{product.brand}</li>
        <li>{product.description}</li>
        <li>${product.price}</li>
      </ul>
    );
  };
  
  export default Item;