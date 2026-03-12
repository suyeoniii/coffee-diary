import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { CoffeeLogsPage } from "../pages/coffee-logs/CoffeeLogsPage";
import { NewCoffeeLogPage } from "../pages/coffee-logs/NewCoffeeLogPage";
import { BeanListPage } from "../pages/beans/BeanListPage";
import { SettingPages } from "../pages/settings/SettingPages";
import { CoffeeLogDetailPage } from "../pages/coffee-logs/CoffeeLogDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/logs" replace /> },
      { path: "logs", element: <CoffeeLogsPage /> },
      { path: "logs/new", element: <NewCoffeeLogPage /> },
      { path: "logs/:id", element: <CoffeeLogDetailPage /> },
      { path: "beans", element: <BeanListPage /> },
      { path: "settings", element: <SettingPages /> },
    ],
  },
]);
