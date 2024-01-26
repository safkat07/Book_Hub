import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout/MainLayout.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddBooks from "./Components/AddBooks/AddBooks.jsx";
import CategoryBooks from "./Components/CategoryBooks/CategoryBooks.jsx";
import SingleBooks from "./Components/SingleBooks/SingleBooks.jsx";
import AllBooks from "./Pages/AllBooks/AllBooks.jsx";
import UpdateBooks from "./Components/UpdateBooks/UpdateBooks.jsx";
import ReadBooks from "./Components/SingleBooks/ReadBooks.jsx";

import ShowBorrowedReadBook from "./Components/BorrowedBooks/ShowBorrowedReadBook .jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";
import BorrowedBooks from "./Components/BorrowedBooks/BorrowedBooks.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addbooks",
        element: <PrivateRoute>
          <AddBooks></AddBooks>
        </PrivateRoute>,
      },
      {
        path: "categorybooks/:id",
        element: <CategoryBooks></CategoryBooks>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/bookCollection/${params.id}`),
      },
      {
        path: "singlebooks/:id",
        element: <PrivateRoute>
          <SingleBooks></SingleBooks>
        </PrivateRoute>,

        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/addedBooks/${params.id}`)
      },
      {
        path: 'allbooks',
        element: <AllBooks></AllBooks>,

      },
      {
        path: 'updatebooks/:id',
        element: <PrivateRoute>
          <UpdateBooks></UpdateBooks>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/addedBooks/${params.id}`)
      },
      {
        path: 'readbook/:id',
        element: <ReadBooks></ReadBooks>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/addedBooks/${params.id}`)

      },
      {
        path: 'borrowedbook',
        element: <PrivateRoute>
          <BorrowedBooks></BorrowedBooks>
        </PrivateRoute>


      },
      {
        path: '/read-book/:id',
        element: <ShowBorrowedReadBook></ShowBorrowedReadBook>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/borrowedbooks/${params.id}`)


      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
