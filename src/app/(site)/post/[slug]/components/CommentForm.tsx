"use client";

import React from "react";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";

import { FormController, Button } from "@/components/ui";
import { User } from "@prisma/client";

interface CommentFormProps {
   user: User | null;
}

const CommentForm: React.FC<CommentFormProps> = ({ user }) => {
   return (
      <div className="flex mb-4 w-full">
         <span className="block w-8 h-8 mr-2">
            <Image
               src={user?.image || "/images/user.png"}
               alt="user"
               className="w-full h-full rounded-full"
               width={100}
               height={100}
            />
         </span>
         <FormController className="w-full">
            <TextareaAutosize
               style={{
                  height: 128,
               }}
               className="p-2 max-h-[40vh] w-full rounded-md resize-y"
               placeholder="Add to the discussion"
            />

            <Button variant="primary" className="h-10 min-h-fit py-2 px-4 mt-3">
               Submit
            </Button>
         </FormController>
      </div>
   );
};
export default CommentForm;
