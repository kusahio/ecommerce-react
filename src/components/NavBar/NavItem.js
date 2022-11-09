import NavLink from "./NavLink"
import './NavItem.scss';

function NavItem( {link, linkLabel, icon} ) {
  return (
    <li className="navItem">
      <NavLink link={link} linkLabel={linkLabel} icon={icon} />
    </li>    
  )
}

export default NavItem