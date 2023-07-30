"use client";

import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div>
         <SessionProvider>
            <Fragment>{children}</Fragment>
            <Toaster />
         </SessionProvider>
      </div>
   );
};
export default Providers;
