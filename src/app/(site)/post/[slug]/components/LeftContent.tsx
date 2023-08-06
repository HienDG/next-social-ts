import React from "react";

import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

interface LeftContentProps {}

const LeftContent: React.FC<LeftContentProps> = () => {
   return (
      <aside className="grid bg-base-200 sticky top-[calc(56px+1rem+6vh)] z-[1] h-full">
         <div className="grid items-center w-full h-full gap-4 justify-stretch max-h-[277px]">
            <div className="flex items-center justify-center flex-col cursor-pointer py-2">
               <AiOutlineHeart className="w-6 h-6 hover:text-red-600" />
               <span>0</span>
            </div>

            <div className="flex items-center justify-center flex-col cursor-pointer py-2">
               <AiOutlineComment className="w-6 h-6 hover:text-red-600" />
               <span>0</span>
            </div>

            <div className="flex items-center justify-center flex-col cursor-pointer py-2">
               <BsBookmark className="w-6 h-6 hover:text-red-600" />
            </div>
         </div>
      </aside>
   );
};
export default LeftContent;
