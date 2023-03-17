import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";
import Search from "../forms/Search";

function Navbar() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} width="150px" className="object-contain" alt="" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className="font-semibold cursor-pointer"
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link className="cursor-pointer" to="/add-book" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>

        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
