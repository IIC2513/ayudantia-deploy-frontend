import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      try {
        console.log(BACKEND_URL);
        const response = await axios.get(`https://${BACKEND_URL}/books/`);
        console.log(response);
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getBooks();
  }, []);

  return (
    <>
      <h1>Hola mundo!</h1>
      <p>{JSON.stringify(books)}</p>
    </>
  );
}

export default App;
