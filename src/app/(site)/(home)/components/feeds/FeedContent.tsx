"use client";

import React from "react";

import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Link from "next/link";

import { Button } from "@/components/ui";

import type { ExtendedPost } from "@/types/db";

interface FeedContentProps {
   post: ExtendedPost;
}

const FeedContent: React.FC<FeedContentProps> = ({ post }) => {
   return (
      <div className="flex flex-col gap-2 mt-3 md:pl-10">
         <Link className="block" href={`/`}>
            <h3 className="mb-2 text-3xl font-bold break-words cursor-pointer hover:text-blue-600">
               {post.title}
            </h3>
         </Link>

         <div className="flex items-center justify-between text-sm">
            <div className="gap-2 join">
               <Button variant="ghost" className="h-10">
                  <AiOutlineHeart className="w-5 h-5" />
               </Button>
               <Button variant="ghost" className="h-10">
                  <AiOutlineComment className="w-5 h-5" />
                  <span>Add Comments</span>
               </Button>
            </div>

            <Button variant="ghost" className="h-10 btn-circle">
               <BsBookmark className="w-5 h-5" />
            </Button>
         </div>
      </div>
   );
};
export default FeedContent;
