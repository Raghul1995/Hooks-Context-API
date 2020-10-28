import BookDetails from './components/BookDetails';
import NwBookForm from './components/BookForm';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookContextProvider from './context/BookContext'
function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <NavBar/>
        <BookList/>
       <NwBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
