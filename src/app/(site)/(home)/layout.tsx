import React from "react";

import Sidebar from "./components/sidebar";

const HomeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return <Sidebar>{children}</Sidebar>;
};
export default HomeLayout;
