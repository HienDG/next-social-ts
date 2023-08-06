import { User, Post, Comment } from "@prisma/client";

export type ExtendedPost = Post & {
   user: User;
   _count: {
      comments: number;
   };
};

export type ExtendedPostWithComment = Post & {
   user: User;
   comments: Comment[];
   _count: {
      comments: number;
   };
};
