"use client";

import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

import type { IconType } from "react-icons";

import { merge } from "@/libs";

export interface MenuItemProps
   extends React.PropsWithChildren,
      Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> {
   className?: string;
   to?: string;
   icon?: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({
   className,
   children,
   to = "#",
   icon: Icon,
   onClick,
}) => {
   const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (onClick) {
         event.preventDefault();

         return onClick(event);
      }
   };

   return (
      <Menu.Item>
         {({ active }) => (
            <Link
               href={to}
               className={merge(
                  "group flex w-full min-h-[40px] items-center p-4 leading-5 text-base",
                  className,
                  {
                     ["bg-[hsl(var(--bc)/0.2)]"]: active,
                     ["gap-3"]: Icon,
                  },
               )}
               onClick={handleClick}
            >
               <Fragment>{Icon && <Icon className="w-6 h-6" />}</Fragment>
               <Fragment>{children}</Fragment>
            </Link>
         )}
      </Menu.Item>
   );
};
export default MenuItem;
