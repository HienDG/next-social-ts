import React from "react";
import { notFound } from "next/navigation";

import LeftContent from "./components/LeftContent";
import PostContent from "./components/PostContent";
import AuthorCard from "./components/AuthorCard";
import PostHeader from "./components/PostHeader";
import CommentBlock from "./components/CommentBlock";

import { getPostById } from "@/libs/actions";

interface PostDetailProps {
   params: {
      slug: string;
   };
}

const PostDetail: React.FC<PostDetailProps> = async ({ params }) => {
   const { slug } = params;

   const post = await getPostById(slug);

   if (!post) return notFound();

   return (
      <div className="max-w-7xl w-full mx-auto grid grid-cols-[4rem_7fr_3fr] gap-4 p-4">
         <LeftContent />
         <article className="bg-base-100 rounded-lg ring-base-300 shadow">
            <PostHeader post={post} />
            <PostContent post={post} />
            <CommentBlock comments={post.comments} />
         </article>
         <AuthorCard userId={post.user.id} />
      </div>
   );
};
export default PostDetail;
