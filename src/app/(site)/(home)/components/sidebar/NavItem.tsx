"use client";

import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

import { HOME_URL } from "@/utils/constants";

interface NavItemProps extends React.PropsWithChildren {
   href?: string;
   icon: IconType;
}

const NavItem: React.FC<NavItemProps> = ({ href = HOME_URL, children, icon: Icon }) => {
   return (
      <li>
         <Link
            href={href}
            className="flex items-center py-2 px-4 bg-transparent hover:bg-neutral/30 max-w-full w-full outline-0 rounded-md gap-2"
         >
            <Icon className="w-6 h-6" />
            <span>{children}</span>
         </Link>
      </li>
   );
};
export default NavItem;
