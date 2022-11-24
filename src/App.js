import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import './App.scss';

function App() {

  

  return (
    
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section>
      <ItemListContainer/>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
