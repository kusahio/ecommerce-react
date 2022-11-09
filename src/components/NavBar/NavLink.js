import './NavLink.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLink({ link, linkLabel, icon }) {
  return (
    <a className="navLink" href={link}>
      <span><FontAwesomeIcon icon={icon} /></span>{linkLabel}
    </a>
  )
}
export default NavLink