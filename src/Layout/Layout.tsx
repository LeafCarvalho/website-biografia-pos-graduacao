import Header from "@/components/header/header";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
