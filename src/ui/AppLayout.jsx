import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <main className="py-[23px] px-[50px] bg-white dark:bg-[#000426] min-h-[100vh]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
