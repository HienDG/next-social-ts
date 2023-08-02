import React from "react";
import { notFound } from "next/navigation";

import DraftForm from "./components/DraftForm";

import { getCurrentUserById } from "@/libs/actions";

interface DraftPageProps {
   params: {
      slug: string;
   };
}

const DraftPage: React.FC<DraftPageProps> = async ({ params }) => {
   const { slug } = params;

   const currentUser = await getCurrentUserById(slug);

   if (!currentUser) return notFound();

   return (
      <main className="bg-base-200 block">
         <DraftForm user={currentUser} />
      </main>
   );
};
export default DraftPage;
