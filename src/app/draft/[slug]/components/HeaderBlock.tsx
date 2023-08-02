"use client";

import React, { Fragment } from "react";
import Image from "next/image";

import { useSelectedFile } from "@/hooks";

interface HeaderBlockProps {
   title: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ title }) => {
   const { file } = useSelectedFile();

   return (
      <header>
         <Fragment>
            {file && (
               <div className="w-full relative pt-[42%]">
                  <Image
                     className="w-full h-full absolute inset-0 m-0"
                     src={file}
                     alt="CoverImage"
                     width={1000}
                     height={1000}
                  />
               </div>
            )}
         </Fragment>
         <div className="px-16 pt-8">
            <h1 className="font-bold lg:text-4xl md:text-2xl text-lg mb-2">{title}</h1>
         </div>
      </header>
   );
};
export default HeaderBlock;
