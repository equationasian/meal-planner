import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/index.css';
import App from './App';
import Recipe from './Recipe';
import Search from "./Search";
import Home from './Home';
import NotFound from './NotFound';
import * as fetchRecipe from "./fetchRecipe.js";

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
        loader: fetchRecipe.searchTagsLoader,
        element: <Search />,
      },
      {
        path: "/recipes/:recipeName",
        loader: fetchRecipe.recipePageLoader,
        errorElement: <NotFound />,
        element: <Recipe />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
