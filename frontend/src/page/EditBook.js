import { useParams } from "react-router-dom";
import EditBookForm from "../component/forms/EditBookForm";
import { useGetBookQuery } from "../features/books/api/bookSlice";
function EditBook() {
  const { id } = useParams();
  const { data } = useGetBookQuery({ id });

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          <EditBookForm {...data} />
        </div>
      </div>
    </main>
  );
}

export default EditBook;
