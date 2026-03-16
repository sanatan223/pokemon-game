import { Outlet } from "react-router";
import Navbar from "./views/components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar /> 
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;