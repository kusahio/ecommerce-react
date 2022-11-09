import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer greeting="hola" />
      </header>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
