import NavBar from "./NavBar/NavBar"
import ItemListContainer from "./NavBar/ItemListContainer"

function Header() {
  return (
    <header>
     <NavBar />
     <ItemListContainer greeting="Bienvenido a Petmi!" />
    </header>
  )
}
export default Header