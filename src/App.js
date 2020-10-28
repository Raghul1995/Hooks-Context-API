import NavBar from './components/NavBar';
import BookContextProvider from './context/BookContext'
function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <NavBar/>
      </BookContextProvider>
    </div>
  );
}

export default App;
