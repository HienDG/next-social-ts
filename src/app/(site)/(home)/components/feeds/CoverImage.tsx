"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { POST_URL } from "@/utils/constants";
interface CoverImageProps {
   src: string;
   postId: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ src, postId }) => {
   return (
      <div className="block w-[650px] h-[275px] shadow">
         <Link href={`${POST_URL}/${postId}`} className="block w-full h-full mx-auto">
            <Image
               src={src}
               alt="cover image"
               width={650}
               height={275}
               className="object-fill w-full h-full mx-auto align-middle"
            />
         </Link>
      </div>
   );
};
export default CoverImage;
