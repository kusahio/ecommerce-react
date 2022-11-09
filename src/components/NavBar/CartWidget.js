import './CartWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <button className='cartWidget'>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  )
}

export default CartWidget