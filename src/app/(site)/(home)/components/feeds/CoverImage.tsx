"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CoverImageProps {
   src: string;
   postId: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ src }) => {
   return (
      <div className="block w-[650px] h-[275px] shadow">
         <Link href={`/`} className="block w-full h-full mx-auto">
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
