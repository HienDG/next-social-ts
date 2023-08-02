"use client";

import React from "react";
import Image from "next/image";

import { merge } from "@/libs";

export interface AvatarProps {
   height?: number;
   width?: number;
   className?: string;
   src?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ height = 100, width = 100, className, src }) => {
   return (
      <div className="avatar">
         <div className={merge("rounded-full", className)}>
            <Image
               src={src || "/images/user.png"}
               alt="avatar"
               width={width}
               height={height}
               className="object-cover w-full h-full align-middle"
               priority
            />
         </div>
      </div>
   );
};
export default Avatar;
