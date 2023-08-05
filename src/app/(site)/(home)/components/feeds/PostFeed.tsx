"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import FeedItem from "./FeedItem";

import { ExtendedPost } from "@/types/db";
import { PAGINATION_RESULTS } from "@/utils/constants";

interface PostFeedProps {
   initialPosts: ExtendedPost[];
}

const PostFeed: React.FC<PostFeedProps> = ({ initialPosts }) => {
   const lastPostRef = useRef<HTMLDivElement>();
   const { ref, entry } = useInView({
      root: lastPostRef.current,
      threshold: 0,
   });

   const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      ["infinite-query"],
      async ({ pageParam = 0 }) => {
         const query = `/api/post?limit=${PAGINATION_RESULTS}&page=${pageParam}`;

         const { data } = await axios.get(query);

         return data as ExtendedPost[];
      },
      {
         getNextPageParam: (_, page) => page.length + 1,
         initialData: {
            pages: [initialPosts],
            pageParams: [1],
         },
      },
   );

   useEffect(() => {
      if (entry?.isIntersecting) {
         fetchNextPage(); // Load more posts when the last post comes into view
      }
   }, [entry, fetchNextPage]);

   const posts = useMemo(
      () => data?.pages.flatMap((page) => page) ?? initialPosts,
      [data?.pages, initialPosts],
   );

   return (
      <div>
         <div className="space-y-4">
            {posts.map((post, indx) => {
               if (indx === posts.length - 1) {
                  return (
                     <div key={post.id} ref={ref}>
                        <FeedItem post={post} />
                     </div>
                  );
               }

               return <FeedItem key={post.id} post={post} />;
            })}

            {isFetchingNextPage && (
               <li className="flex justify-center">
                  <ClipLoader className="w-6 h-6 text-zinc-500 animate-spin" />
               </li>
            )}
         </div>
      </div>
   );
};
export default PostFeed;
