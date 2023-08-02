"use client";

import React from "react";
import Output from "editorjs-react-renderer";
import type { OutputData } from "@editorjs/editorjs";

import HeaderBlock from "./HeaderBlock";

interface ReviewBlockBlockProps {
   data: OutputData;
   title: string;
}

const ReviewBlock: React.FC<ReviewBlockBlockProps> = ({ data, title }) => {
   return (
      <div className="w-full h-full" key={data.time}>
         <HeaderBlock title={title} />

         <div className="md:py-8 pb-4 lg:px-16 md:px-12 sm:p-5 p-2 ">
            <Output data={data} />
         </div>
      </div>
   );
};
export default ReviewBlock;
