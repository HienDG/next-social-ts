import prisma_db from "@/libs/db";
import getAuthSession from "./getAuthSession";

const getCurrentUser = async (userId: string) => {
   try {
      const session = await getAuthSession();

      if (!session || !session.user?.email) throw new Error("User not logged in");

      const currentUser = await prisma_db.user.findUnique({
         where: {
            id: userId,
         },
      });

      if (!currentUser) throw new Error("Record does not exist");

      if (currentUser.email !== session.user.email) throw new Error("Invalid User Id");

      return currentUser;
   } catch (error: unknown) {
      console.error(error);

      return null;
   }
};

export default getCurrentUser;
