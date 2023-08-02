"use client";

import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SignOutDialog, LoadingModal } from "@/components/modal";

import { useModalStore } from "@/hooks";

const queryClient = new QueryClient();

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
   const { view } = useModalStore();

   return (
      <div>
         <QueryClientProvider client={queryClient}>
            <SessionProvider>
               <Fragment>{children}</Fragment>
               <Toaster />

               <Fragment>{view === "sign-out" && <SignOutDialog />}</Fragment>
               <Fragment>{view === "loading" && <LoadingModal />}</Fragment>
            </SessionProvider>
         </QueryClientProvider>
      </div>
   );
};
export default Providers;
