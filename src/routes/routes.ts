import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import Blog from "@/components/Blog";

export const Routes = createBrowserRouter([
    {
    path: "/",
    Component: App,
    children: [
      { index: true, loader: () => redirect("/blog") },
      { path: "blog", Component: Blog },
    ],
  },
]);
