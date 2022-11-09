import NavBar from "./NavBar/NavBar"
import ItemListContainer from "./NavBar/ItemListContainer"

function Header() {
  return (
    <header>
     <NavBar />
     <ItemListContainer greeting="Testeando el commit!!" />
    </header>
  )
}
export default Header