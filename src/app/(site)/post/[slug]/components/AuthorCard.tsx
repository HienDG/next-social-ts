import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { Button } from "@/components/ui";

import getUserById from "@/libs/actions/getUserById";

interface AuthorCardProps {
   userId: string;
}

const AuthorCard: React.FC<AuthorCardProps> = async ({ userId }) => {
   const user = await getUserById(userId);

   return (
      <aside className="mb-4">
         <div className="p-4 space-y-6 rounded-md bg-base-100 h-fit shadow-md ring-base-300 border-t-[36px] border-t-green-600">
            <div className="-mt-10">
               <Link href="/" className="flex items-center w-full gap-4">
                  <div className="w-12 h-12 block">
                     <Image
                        src={user?.image || "/images/user.png"}
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-full h-full rounded-full"
                     />
                  </div>

                  <span className="text-lg font-bold mt-6">{user?.name}</span>
               </Link>
            </div>
            <div>
               <Button variant="primary" className="h-10 min-h-fit px-4 py-2 w-full">
                  Follow
               </Button>
            </div>
            <div className="text-base opacity-90">{user?.bio || "404 bio not found"}</div>

            <div>
               <div className="font-bold opacity-90">Joined</div>
               <div className="opacity-90">{moment().format("MMMM Do YYYY")}</div>
            </div>
         </div>
      </aside>
   );
};
export default AuthorCard;
