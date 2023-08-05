import prisma_db from "@/libs/db";
import getAuthSession from "./getAuthSession";

const getCurrentUser = async () => {
   try {
      const session = await getAuthSession();

      if (!session || !session.user?.email) throw new Error("User not logged in");

      const currentUser = await prisma_db.user.findUnique({
         where: {
            email: session.user?.email,
         },
      });

      if (!currentUser) throw new Error("Record does not exist");

      return currentUser;
   } catch (error: unknown) {
      console.error(error);

      return null;
   }
};

export default getCurrentUser;
