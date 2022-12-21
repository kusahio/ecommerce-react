import { Link } from 'react-router-dom';
import { useGetItemImg } from '../../hooks/useGetItemImg';
import Loader from '../Loader';
import './Item.scss';

const Item = ({ product, quantityAdded  }) => {
  const pathItem = '/item/';
  const img = useGetItemImg(product.img);

  if(!img){
    return <Loader />
  }

  return (
    <ul className='productBox'>
      <Link to={pathItem + product.id}>
        <li><img src={img} alt="Product" /></li>
      </Link>
      <li className='brand'>{product.brand}</li>
      <Link to={pathItem + product.id}>
        <li className='description'>{product.description}</li>
      </Link>
      <li className='price'>${product.price}</li>
      <span>
      {quantityAdded ? "Agregados" : "En Stock"}:{" "}
      {quantityAdded || product.stock}
      </span>
    </ul>
  );
};

export default Item;