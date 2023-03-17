import AddBook from "./page/AddBook";
import EditBook from "./page/EditBook";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </>
  );
}

export default App;
