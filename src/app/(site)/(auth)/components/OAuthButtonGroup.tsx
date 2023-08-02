"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";

import { Button } from "@/components/ui";

import { HOME_URL } from "@/utils/constants";

interface OAuthButtonGroupProps {}

const OAuthButtonGroup: React.FC<OAuthButtonGroupProps> = () => {
   const signInByProvider = async (provider: BuiltInProviderType) => {
      return await signIn(provider, {
         redirect: false,
         callbackUrl: HOME_URL,
      });
   };

   return (
      <div className="join join-vertical gap-4 w-full">
         <Button
            className="h-10 p-3 pr-5 whitespace-nowrap w-full"
            variant="primary"
            onClick={() => signInByProvider("google")}
         >
            <AiOutlineGoogle className="w-6 h-6" />
            <span>Continue with Google</span>
         </Button>

         <Button
            className="h-10 p-3 pr-5 whitespace-nowrap w-full"
            variant="neutral"
            onClick={() => signInByProvider("github")}
         >
            <AiOutlineGithub className="w-6 h-6" />
            <span>Continue with Github</span>
         </Button>
      </div>
   );
};
export default OAuthButtonGroup;
