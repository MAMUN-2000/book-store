import {
  useGetBooksQuery,
  // useGetSearchBooksQuery,
  // useGetFilterBooksQuery,
} from "../../features/books/api/bookSlice";
import BooksLoader from "../ui/loaders/BooksLoader";
import BookItem from "./BookItem";
import Error from "../ui/Error";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../features/filter/filterSlice";
function BookList({ filter }) {
  // const [filterSearch, setFitlerSearch] = useState(false);
  const {
    isError,
    isLoading,
    data: books,
  } = useGetBooksQuery(undefined, { skip: false });
  const {
    search,
    booksList: book,
    all,
    feature,
  } = useSelector((state) => state.filterBooks);
  // const { data } = useGetSearchBooksQuery(search);
  console.log(book);
  // const { data } = useGetFilterBooksQuery({ tags: search, feature });
  const dispatch = useDispatch();

  dispatch(actions.getBooks(books));
  useEffect(() => {
    dispatch(actions.getBooks(books));
  }, [dispatch, books]);

  // decide what to render
  let element;

  if (isLoading) {
    element = (
      <>
        <BooksLoader />
        <BooksLoader />
        <BooksLoader />
        <BooksLoader />
        <BooksLoader />
        <BooksLoader />
      </>
    );
  }
  if (isError) {
    element = <Error />;
  }
  if (!isLoading && !isError && books?.length === 0) {
    element = <h1 className="text-center">No books found ! </h1>;
  }
  if (!isLoading && !isError && book?.length > 0) {
    element = books.map((book) => <BookItem key={book.id} {...book} />);
  }

  return element;
}

export default BookList;
