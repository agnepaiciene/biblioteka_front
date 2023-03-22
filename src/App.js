import logo from './logo.svg';
import './App.css';
import Book from "./components/Biblioteka";
import Biblioteka from "./components/Biblioteka";
import BooksContext, {BooksContextProvider} from "./context/BooksContext";

function App() {
  return (
      <div className="container">

          <BooksContextProvider>
              <Biblioteka></Biblioteka>
          </BooksContextProvider>
      </div>
  );
}

export default App;
