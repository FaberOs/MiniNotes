import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[5rem,1fr] grid-rows-[auto,1fr] h-screen">
      <div className="col-span-1 row-span-2">
        <Sidebar />
      </div>
      <div className="col-start-2 row-start-1">
        <Header />
      </div>
      <main className="col-start-2 row-start-2 overflow-auto ">{children}</main>
    </div>
  );
};

export default Layout;
