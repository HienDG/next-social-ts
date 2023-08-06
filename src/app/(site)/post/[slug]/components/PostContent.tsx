"use client";

import React from "react";
import Output from "editorjs-react-renderer";

import { ExtendedPostWithComment } from "@/types/db";

interface PostContentProps {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   post: ExtendedPostWithComment;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
   return (
      <div className="prose px-12 py-8 max-w-full">
         <Output data={post.content} />
      </div>
   );
};
export default PostContent;
