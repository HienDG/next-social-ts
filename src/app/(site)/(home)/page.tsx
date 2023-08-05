import React from "react";

import PostFeed from "./components/feeds/PostFeed";

import { getAllPost } from "@/libs/actions";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Home = async () => {
   const posts = await getAllPost();

   return <PostFeed initialPosts={posts} />;
};

export default Home;
