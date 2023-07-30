"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { HOME_URL } from "@/utils/constants";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
   return (
      <Link
         className="flex w-[50px] h-10"
         href={HOME_URL}
      >
         <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-full h-full"
         />
      </Link>
   );
};
export default Logo;
