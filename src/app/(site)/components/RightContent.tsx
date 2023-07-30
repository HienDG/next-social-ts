"use client";

import React, { Fragment } from "react";
import Link from "next/link";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
   return (
      <Fragment>
         <Link
            href="/"
            className="btn h-10 min-h-fit px-[15px] py-[7px] whitespace-nowrap btn-primary btn-outline hover:underline font-medium"
         >
            Create Post
         </Link>

         <Link
            href="/"
            className="btn h-10 min-h-fit p-2 rounded-full btn-ghost"
         >
            <AiOutlineBell className="w-6 h-6" />
         </Link>
      </Fragment>
   );
};
export default RightContent;
