import { Link } from 'react-router-dom';
import { useGetItemImg } from '../../hooks/useGetItemImg';
import Loader from '../Loader';
import './Item.scss';

const Item = ({ product, quantityAdded }) => {
  const pathItem = '/item/';
  const img = useGetItemImg(product.img);

  if (!img) {
    return <Loader />
  }

  return (
    <div className='productBoxContainer'>
      <div className='productBox'>
        <ul>
          <li>
            <Link to={pathItem + product.id}>
              <img src={img} alt="Product" />
            </Link>
          </li>
          <li className='brand'>{product.brand}</li>
          <li className='description'>
            <Link to={pathItem + product.id}>
              <span>
                {product.description}
              </span>
            </Link>
          </li>
          <li className='price'>${product.price}</li>
          <li className='stock'>
            <span>
              {quantityAdded ? "Agregados" : "En Stock"}:{" "}
              {quantityAdded || product.stock}
            </span>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Item;