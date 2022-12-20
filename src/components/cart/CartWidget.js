import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';

function CartWidget() {

  const { productsAdded } = useContext(CartContext);
  const count = productsAdded.length;

  return (
    <Link to='/cart' className='cartWidget'>
      <FontAwesomeIcon icon={faCartShopping} />
      {count > 0 && (
        <span>{count}</span>
      )}
    </Link>
  )
}

export default CartWidget