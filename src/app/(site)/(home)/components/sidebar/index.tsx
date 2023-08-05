import React from "react";

import LeftContent from "./LeftContent";

const Sidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <main className="bg-base-200/60 min-h-screen">
         <div className="max-w-7xl w-full mx-auto p-4 grid gap-4 grid-cols-[240px_2fr_1fr] text-base">
            <LeftContent />
            <div>{children}</div>
            <aside></aside>
         </div>
      </main>
   );
};
export default Sidebar;
