
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import CartWidget from '../cart/CartWidget';
import './NavBar.scss';
//import { faDog, faCat, faBaseball } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

  return (
    <nav>
      <Link to='/'>
        <img className='logo' src={Logo} alt='Logo' />
      </Link>
      <ul>
        <Link to='/category/perros'>
          Perros
        </Link>
        <Link to='/category/gatos'>
          Gatos
        </Link>
        <Link to='/category/accesorios'>
          Accesorios
        </Link>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar