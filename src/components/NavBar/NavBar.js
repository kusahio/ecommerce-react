
import Logo from '../../assets/logo.svg';
import NavItem from "./NavItem";
import CartWidget from './CartWidget';
import './NavBar.scss';
import { faDog, faCat, faBaseball } from '@fortawesome/free-solid-svg-icons' 

function NavBar() {

  return (
    <nav>
      <a className='logo' href='#' title='Logo'>
        <img className='logo' src={Logo} alt='Logo' />
      </a>
      <ul>
        <NavItem link="#" linkLabel="Perros" icon={faDog} />
        <NavItem link="#" linkLabel="Gatos" icon={faCat} />
        <NavItem link="#" linkLabel="Accesorios" icon={faBaseball} />
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar