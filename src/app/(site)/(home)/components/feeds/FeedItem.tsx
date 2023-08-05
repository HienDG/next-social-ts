"use client";

import React, { Fragment } from "react";

import CoverImage from "./CoverImage";
import FeedMeta from "./FeedMeta";
import FeedContent from "./FeedContent";
import type { ExtendedPost } from "@/types/db";

interface FeedItemProps {
   post: ExtendedPost;
}

const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
   return (
      <article className="w-full h-full overflow-hidden bg-base-100 shadow md:rounded-lg ring-base-200">
         <div>
            <Fragment>
               {post.coverImage ? <CoverImage src={post.coverImage} postId={post.id} /> : null}
            </Fragment>
            <div className="p-4 md:p-5">
               <FeedMeta user={post.user} created_at={post.created_at} />
               <FeedContent post={post} />
            </div>
         </div>
      </article>
   );
};
export default FeedItem;
