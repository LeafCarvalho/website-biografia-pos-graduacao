import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import Blog from "@/components/Blog";
import About from "@/components/About";

export const Routes = createBrowserRouter([
    {
    path: "/",
    Component: App,
    children: [
      { index: true, loader: () => redirect("/blog") },
      { path: "blog", Component: Blog },
      { path: "about", Component: About },
    ],
  },
]);
