import React from "react";

import AuthButtonGroup from "./AuthButtonGroup";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RightContent from "./RightContent";

import { getCurrentUser } from "@/libs/actions";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = async () => {
   const currentUser = await getCurrentUser();

   return (
      <header className="bg-base-100 fixed top-0 inset-x-0 z-[50] shadow-md h-14">
         <div className="max-w-7xl px-4 mx-auto w-full flex items-center relative h-14">
            <Logo />
            <SearchBar />

            <div className="flex ml-auto h-full items-center gap-3">
               {currentUser ? <RightContent /> : <AuthButtonGroup />}
            </div>
         </div>
      </header>
   );
};
export default MainHeader;
