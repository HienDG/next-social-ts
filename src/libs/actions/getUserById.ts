import prisma_db from "@/libs/db";

const getUserById = async (userId: string) => {
   try {
      const user = prisma_db.user.findUnique({
         where: {
            id: userId,
         },
      });

      return user;
   } catch (error: unknown) {
      console.error(error);

      return null;
   }
};

export default getUserById;
