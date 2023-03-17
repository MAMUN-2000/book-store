import { useState } from "react";
import { useDispatch } from "react-redux";
import BookList from "../component/books/BookList";
import * as actions from "../features/filter/filterSlice";

function Home() {
  const [filter, setFilter] = useState(false);
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleFeatured = () => {
    setActive(true);
    setFilter(true);
    dispatch(actions.getFeatured());
  };
  const handleAll = () => {
    setActive(false);
    setFilter(false);
    dispatch(actions.getAll());
  };

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={`lws-filter-btn ${!isActive && "active-filter"}`}
              onClick={handleAll}
            >
              All
            </button>
            <button
              className={` ${isActive && "active-filter"} lws-filter-btn`}
              onClick={handleFeatured}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BookList filter={filter} />
        </div>
      </div>
    </main>
  );
}

export default Home;
