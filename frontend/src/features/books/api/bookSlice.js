import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data) => ({
        url: "books",
        method: "GET",
        body: data,
      }),
      providesTags: ["books", "book"],
    }),
    getBook: builder.query({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "GET",
        body: data,
      }),
      providesTags: (result, error, arg) => [{ type: "book", id: arg.id }],
    }),
    getSearchBooks: builder.query({
      query: ({ tags = "" }, data) => {
        const splitedBookName = tags
          .split(" ")
          .map((tag) => `name_like=${tag}`)
          .join("&");

        const queryString = `?${splitedBookName}`;
        return {
          url: `books/${queryString}`,
          method: "GET",
          body: data,
        };
      },
      invalidatesTags: (result, err, arg) => ["books"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    eiditBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, err, arg) => [
        "books",
        { type: "book", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useEiditBookMutation,
  useGetBookQuery,
  useGetSearchBooksQuery,
} = bookSlice;
