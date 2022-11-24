import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ product }) => {
  const pathItem = '/item/';
  return (
    <ul className='productBox'>
      <Link to={pathItem + product.id}>
        <li><img src={product.img} alt="Product" /></li>
      </Link>
      <li className='brand'>{product.brand}</li>
      <Link to={pathItem + product.id}>
        <li className='description'>{product.description}</li>
      </Link>
      <li className='price'>${product.price}</li>
    </ul>
  );
};

export default Item;