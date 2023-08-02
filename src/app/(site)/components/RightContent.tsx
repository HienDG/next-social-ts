"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { User } from "@prisma/client";

import { AiOutlineBell } from "react-icons/ai";

import { DRAFT_URL } from "@/utils/constants";

const ProfileMenu = dynamic(() => import("./ProfileMenu"), { ssr: false });

interface RightContentProps {
   user: User;
}

const RightContent: React.FC<RightContentProps> = ({ user }) => {
   return (
      <Fragment>
         <Link
            href={`${DRAFT_URL}/${user.id}`}
            className="btn h-10 min-h-fit px-[15px] py-[7px] whitespace-nowrap btn-primary btn-outline hover:underline font-medium"
         >
            Create Post
         </Link>

         <Link href="/" className="btn h-10 min-h-fit p-2 rounded-full btn-ghost">
            <AiOutlineBell className="w-6 h-6" />
         </Link>

         <ProfileMenu user={user} />
      </Fragment>
   );
};
export default RightContent;
