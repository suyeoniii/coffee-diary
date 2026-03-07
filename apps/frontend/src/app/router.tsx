import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { CoffeeLogsPage } from "../pages/coffee-logs/CoffeeLogsPage";
import { NewCoffeeLogPage } from "../pages/coffee-logs/NewCoffeeLogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/logs" replace /> },
      { path: "logs", element: <CoffeeLogsPage /> },
      { path: "logs/new", element: <NewCoffeeLogPage /> },
    ],
  },
]);
