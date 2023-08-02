"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AiOutlineClose } from "react-icons/ai";

import { Button } from "@/components/ui";

import { merge } from "@/libs";
import { HOME_URL } from "@/utils/constants";
import type { ModeView } from "./DraftForm";

interface DraftHeaderProps {
   mode: ModeView;
   onChangeMode: () => void;
}

const DraftHeader: React.FC<DraftHeaderProps> = ({ onChangeMode, mode }) => {
   const router = useRouter();

   return (
      <header className="col-span-2 w-full h-14 flex items-center">
         {/* Logo */}
         <span className="mr-4 max-md:hidden ">
            <Link className="flex w-[50px] h-10" href={HOME_URL}>
               <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full h-full"
               />
            </Link>
         </span>

         {/* Title */}
         <div className="md:flex hidden flex-1 items-center font-medium">
            <span className="inline-block whitespace-nowrap mr-2 ">Create Post</span>
         </div>

         {/* Navbar */}
         <nav className="flex items-center ml-auto">
            <Button
               className={merge("p-2 min-h-fit h-10 mx-1 font-normal", {
                  ["font-bold"]: mode === "editor",
               })}
               type="button"
               onClick={onChangeMode}
            >
               Edit
            </Button>
            <Button
               className={merge("p-2 min-h-fit h-10 mx-1 font-normal", {
                  ["font-bold"]: mode === "preview",
               })}
               type="button"
               onClick={onChangeMode}
            >
               Preview
            </Button>
         </nav>

         {/* Close button */}
         <div className="lg:absolute right-2 top-2 lg:ml-0 ml-1 ">
            <Button
               className="h-full p-2 min-h-fit"
               variant="ghost"
               type="button"
               onClick={() => router.push(HOME_URL)}
            >
               <AiOutlineClose className="w-6 h-6" />
            </Button>
         </div>
      </header>
   );
};
export default DraftHeader;
