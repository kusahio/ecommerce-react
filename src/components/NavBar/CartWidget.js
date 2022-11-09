import './CartWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <button className='cartWidget'>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>5</span>
    </button>
  )
}

export default CartWidget