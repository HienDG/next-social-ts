"use client";

import React from "react";
import Link from "next/link";

import { SIGN_IN_URL, SIGN_UP_URL } from "@/utils/constants";

interface AuthCardProps {}

const AuthCard: React.FC<AuthCardProps> = () => {
   return (
      <div className="p-4 bg-base-100 shadow rounded-md mb-4">
         <h2 className="mb-4 text-xl font-bold">
            DEV Community is a community of 1,113,386 amazing developers
         </h2>
         <p className="opacity-40 mb-4">
            We`re a place where coders share, stay up-to-date and grow their careers.
         </p>
         <div className="join gap-3 join-vertical w-full">
            <Link
               href={SIGN_UP_URL}
               className="btn btn-primary btn-outline min-h-fit h-10 py-2 px-4"
            >
               Create account
            </Link>
            <Link
               href={SIGN_IN_URL}
               className="btn btn-neutral btn-outline min-h-fit h-10 py-2 px-4"
            >
               Log in
            </Link>
         </div>
      </div>
   );
};
export default AuthCard;
