import NavBar from './NavBar/NavBar';

export const Layout = ({ children }) => {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <section className='container'>
        {children}
      </section>
      <footer>

      </footer>
    </div>
  );
};