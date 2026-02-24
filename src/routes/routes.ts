import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../components/Home";

export const Routes = createBrowserRouter([
    {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
    ],
  },
]);
