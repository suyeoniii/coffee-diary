import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { RecipesPage } from "../pages/recipes/RecipesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/recipes" replace /> },
      { path: "recipes", element: <RecipesPage /> },
    ],
  },
]);
