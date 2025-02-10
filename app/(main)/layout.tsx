"use client";

import { FC, PropsWithChildren } from "react";
import NavBar from "../../components/NavBar/NavBar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
