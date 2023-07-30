import React from "react";

import MainHeader from "./components/MainHeader";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main className="mt-14">{children}</main>
    </div>
  );
};
export default MainLayout;
