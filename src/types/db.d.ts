import { User, Post } from "@prisma/client";

export type ExtendedPost = Post & {
   user: User;
   _count: {
      comments: number;
   };
};
