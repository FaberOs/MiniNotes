import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FloatingButton from "../components/FloatingButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="layout">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="header">
        <Header />
      </div>
      <main id="main">{children}</main>
      <FloatingButton />
    </div>
  );
};

export default Layout;
