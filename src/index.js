import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
]);
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);
