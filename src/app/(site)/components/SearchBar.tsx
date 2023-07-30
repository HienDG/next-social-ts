"use client";

import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
   return (
      <div className="mx-4 block flex-1 max-w-[420px] w-full">
         <form className="flex flex-wrap flex-row">
            <div className="flex flex-col text-base flex-1 relative">
               <input
                  type="text"
                  className="w-full py-[6.5px] px-2 input input-bordered h-[2.3rem] min-h-fit hover:input-primary rounded-md"
                  placeholder="Search...."
               />
               <button className="btn w-10 px-2 absolute inset-[1px] hover:bg-transparent rounded-md hover:border-none btn-ghost left-auto min-h-fit h-9">
                  <AiOutlineSearch className="w-6 h-6" />
               </button>
            </div>
         </form>
      </div>
   );
};
export default SearchBar;
