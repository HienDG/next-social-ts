import React from "react";
import { Comment } from "@prisma/client";

import CommentForm from "./CommentForm";

import { getCurrentUser } from "@/libs/actions";

interface CommentBlockProps {
   comments: Comment[];
}

const CommentBlock: React.FC<CommentBlockProps> = async () => {
   const currentUser = await getCurrentUser();

   return (
      <section className="py-8 px-12 border-t border-solid border-t-base-200">
         <CommentForm user={currentUser} />
      </section>
   );
};
export default CommentBlock;
