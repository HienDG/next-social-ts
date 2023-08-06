import React, { Fragment } from "react";
import Image from "next/image";

import PostMeta from "./PostMeta";

import { ExtendedPostWithComment } from "@/types/db";

interface PostHeaderProps {
   post: ExtendedPostWithComment;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
   return (
      <header>
         <Fragment>
            {post.coverImage && (
               <div className="relative w-full pt-[42%]">
                  <Image
                     src={post.coverImage}
                     alt="coverImage"
                     width={1000}
                     height={1000}
                     className="w-full h-full absolute inset-0 rounded-t-md"
                  />
               </div>
            )}
         </Fragment>

         <div className="px-12 pt-8">
            <PostMeta user={post.user} created_at={post.created_at} />
            <h1 className="text-4xl py-3 font-bold mb-3 break-words">{post.title}</h1>
         </div>
      </header>
   );
};
export default PostHeader;
