"use client";

import React, { Fragment } from "react";
import { useSession } from "next-auth/react";

import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends, FaBookmark } from "react-icons/fa";
import { MdGroups, MdOutlineFeed } from "react-icons/md";

import NavItem from "./NavItem";
import AuthCard from "./AuthCard";

interface LeftContentProps {}

const LeftContent: React.FC<LeftContentProps> = () => {
   const { data: session } = useSession();

   return (
      <aside>
         <Fragment>{!session && <AuthCard />}</Fragment>

         <nav>
            <ul className="space-y-3">
               <NavItem icon={AiOutlineHome}>Home</NavItem>
               <NavItem icon={FaUserFriends}>Friends</NavItem>
               <NavItem icon={MdGroups}>Groups</NavItem>
               <NavItem icon={MdOutlineFeed}>Feeds</NavItem>
               <NavItem icon={FaBookmark}>Saves</NavItem>
            </ul>
         </nav>
      </aside>
   );
};
export default LeftContent;
