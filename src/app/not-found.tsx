import React from "react";
import Link from "next/link";

import { HOME_URL } from "@/utils/constants";

const NotFoundPage: React.FC = () => {
   return (
      <div className="grid h-screen px-4 bg-base-100 place-content-center">
         <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>
            <p className="text-2xl font-bold tracking-tight opacity-90 sm:text-4xl">Uh-oh!</p>
            <p className="mt-4 text-gray-500">We can`t find that page.</p>
            <Link
               href={HOME_URL}
               className="px-5 rounded-lg py-3 mt-6 text-sm font-medium btn btn-primary"
            >
               Go Back Home
            </Link>
         </div>
      </div>
   );
};
export default NotFoundPage;
