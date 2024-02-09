import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/index.css';
import App from './App';
import Recipe from './Recipe';
import Search, { searchLoader } from "./Search";
import Home from './Home';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/recipes",
        loader: searchLoader,
        element: <Search />
      },
      {
        path: "/recipes/:recipeName",
        loader: async ({ params }) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.recipeName}`)
        },
        errorElement: <NotFound />,
        element: <Recipe />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
