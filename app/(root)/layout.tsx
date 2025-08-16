import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
