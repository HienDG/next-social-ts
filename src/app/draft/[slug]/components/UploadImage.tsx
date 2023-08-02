"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { Button, UploadButton } from "@/components/ui";

import { useSelectedFile } from "@/hooks";

const UploadImage: React.FC = () => {
   const { file, onRemove, onUpload } = useSelectedFile();

   useEffect(() => {
      // clear data
      return () => {
         onRemove();
      };
   }, [onRemove]);

   return (
      <div>
         {!file ? (
            <div className="px-4 mb-8 flex flex-row font-semibold">
               <UploadButton
                  onUpload={onUpload}
                  className="flex flex-row gap-2 text-sm py-2 px-3 font-medium min-h-fit h-full capitalize"
                  outline
               >
                  <span>Add a Cover Image</span>
               </UploadButton>
            </div>
         ) : (
            <div className="relative mb-5  mx-auto rounded-lg flex items-center">
               <div className="w-1/3 h-1/3 overflow-hidden">
                  <Image
                     src={file}
                     width={1000}
                     height={1000}
                     alt="coverImage"
                     className="w-full h-full"
                  />
               </div>

               <div className="join gap-2 ml-4">
                  <UploadButton
                     onUpload={onUpload}
                     className="py-2 px-[14px] rounded-md min-h-fit h-10"
                     outline
                  >
                     Change
                  </UploadButton>

                  <Button
                     className="py-2 px-[14px] rounded-md min-h-fit h-10 text-error"
                     onClick={onRemove}
                     variant="ghost"
                  >
                     Remove
                  </Button>
               </div>
            </div>
         )}
      </div>
   );
};
export default UploadImage;
