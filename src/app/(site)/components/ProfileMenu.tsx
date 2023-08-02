"use client";

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import type { User } from "@prisma/client";

import { MdOutlineAccountCircle, MdLogout } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { IoMdBookmarks } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";

import MenuItem from "./MenuItem";
import { Avatar } from "@/components/ui";

import { useModalStore } from "@/hooks";

interface ProfileMenuProps {
   user: User;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ user }) => {
   const { onOpen } = useModalStore();

   return (
      <div>
         <Menu as="div" className="relative text-left">
            <Menu.Button className="flex items-center my-auto">
               <Avatar className="w-10 h-10" src={user.image} />
            </Menu.Button>

            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items className="absolute right-0 [&>div]:w-full w-72 mt-2 overflow-hidden origin-top-right z-100 bg-base-100 divide-y divide-[hsl(var(--bc)/0.2)] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div>
                     <MenuItem className="flex items-center gap-4">
                        <Avatar className="w-12 h-12" src={user.image} />
                        <div>
                           <span className="block font-bold">{user.name}</span>
                           <small className="text-sm opacity-75 ">
                              @{user.username || user.email?.split("@")[0]}
                           </small>
                        </div>
                     </MenuItem>
                  </div>

                  <div className="space-y-2">
                     <MenuItem icon={MdOutlineAccountCircle}>Account Setting</MenuItem>

                     <MenuItem icon={BsPencilSquare}>Create Post</MenuItem>

                     <MenuItem icon={AiOutlineBell}>Notifications</MenuItem>

                     <MenuItem icon={IoMdBookmarks}>My Bookmarks</MenuItem>
                  </div>

                  <div>
                     <MenuItem
                        className="text-red-500"
                        icon={MdLogout}
                        onClick={() => onOpen("sign-out")}
                     >
                        Sign Out
                     </MenuItem>
                  </div>
               </Menu.Items>
            </Transition>
         </Menu>
      </div>
   );
};
export default ProfileMenu;
