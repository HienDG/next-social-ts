import React from "react";

import OAuthButtonGroup from "./components/OAuthButtonGroup";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="min-h-screen bg-base-200">
         <section className="text-base p-4 grid gap-4 grid-cols-1 max-w-7xl mx-auto">
            <div className="w-[640px] mx-auto rounded-md bg-base-100 shadow-md p-12">
               <div className="mb-6 text-center">
                  <h1 className="text-3xl font-bold">Welcome to DEV Community</h1>
                  <p className="opacity-80 text-base">
                     DEV Community is a community of 1,110,355 amazing developers
                  </p>
               </div>

               <div>
                  <OAuthButtonGroup />

                  <div className="my-6 flex items-center">
                     <div className="w-full h-[0.125rem] bg-slate-300"></div>
                     <span className="text-center px-5 font-semibold">Or</span>
                     <div className="w-full h-[0.125rem] bg-slate-300"></div>
                  </div>

                  <div>{children}</div>
               </div>
            </div>
         </section>
      </div>
   );
};
export default AuthLayout;
