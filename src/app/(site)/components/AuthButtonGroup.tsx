"use client";

import React from "react";
import Link from "next/link";

import { SIGN_IN_URL, SIGN_UP_URL } from "@/utils/constants";

interface AuthButtonGroupProps {}

const AuthButtonGroup: React.FC<AuthButtonGroupProps> = () => {
   return (
      <div className="join gap-2">
         <Link
            className="btn h-10 min-h-fit px-4 py-2 whitespace-nowrap btn-ghost"
            href={SIGN_IN_URL}
         >
            Log in
         </Link>

         <Link
            className="btn h-10 min-h-fit px-4 py-2 whitespace-nowrap btn-primary btn-outline"
            href={SIGN_UP_URL}
         >
            Create Account
         </Link>
      </div>
   );
};
export default AuthButtonGroup;
