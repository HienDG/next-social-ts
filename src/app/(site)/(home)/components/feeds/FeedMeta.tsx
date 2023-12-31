"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import moment from "moment";

interface FeedMetaProps {
   user: User;
   created_at?: Date;
}

const FeedMeta: React.FC<FeedMetaProps> = ({ user, created_at = Date.now() }) => {
   return (
      <div className="flex items-center justify-between mb-2">
         <div className="flex items-center text-sm">
            <div className="mr-2">
               <Link href={"/"} className="block w-8 h-8 overflow-hidden rounded-full">
                  <Image
                     src={user.image || "/images/user.png"}
                     alt="avatar"
                     className="w-full h-full align-middle"
                     width={100}
                     height={100}
                  />
               </Link>
            </div>

            <div>
               <Link href="/" className="flex items-center gap-1">
                  <div className="font-bold">{user.name}</div>
                  {/* <span>
							<span>for</span> <span className="font-bold">Dang HIen</span>
						</span> */}
               </Link>
               <div className="text-xs opacity-80">
                  <span>
                     {moment(created_at).format("MMMM Do")} ({moment(created_at).fromNow()})
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};
export default FeedMeta;
