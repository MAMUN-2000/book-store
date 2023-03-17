import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEiditBookMutation } from "../../features/books/api/bookSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextInput from "../ui/TextInput";

function EditBookForm(bookData) {
  const [editBook, { isError, isSuccess, isLoading }] = useEiditBookMutation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const {
      id,
      name: initialName,
      author: initialAuthor,
      price: initialPrice,
      rating: initialRating,
      featured: initialFeatured,
      thumbnail: initialThumbnail,
    } = bookData;

    if (id) {
      setAuthor(initialAuthor);
      setFeatured(initialFeatured);
      setName(initialName);
      setPrice(initialPrice);
      setRating(initialRating);
      setThumbnail(initialThumbnail);
    }
  }, [bookData]);

  const handleForm = (e) => {
    e.preventDefault();

    const newData = {
      name,
      author,
      price,
      rating,
      featured,
      thumbnail,
      id: bookData.id,
    };
    editBook({
      id: bookData.id,
      data: newData,
    });
    navigate("/");
  };

  return (
    <form className="book-form" onSubmit={handleForm}>
      <div className="space-y-2">
        <TextInput
          title={"Book Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <TextInput
          title={"Author"}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <TextInput
          title={"Image Url"}
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <TextInput
            title={"Price"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </div>

        <div className="space-y-2">
          <TextInput
            title={"Rating"}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          onChange={() => setFeatured((prev) => !prev)}
          checked={featured}
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          This is a featured book
        </label>
      </div>

      <button
        type="submit"
        className="submit"
        id="lws-submit"
        disabled={isLoading}
      >
        Add Book
      </button>
      {isSuccess && <Success message="Book was added successfully" />}
      {isError && <Error />}
    </form>
  );
}

export default EditBookForm;
