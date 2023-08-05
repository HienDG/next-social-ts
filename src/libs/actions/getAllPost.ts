import prisma_db from "@/libs/db";

const getAllPost = async () => {
   try {
      const posts = await prisma_db.post.findMany({
         orderBy: {
            created_at: "desc",
         },

         include: {
            user: true,
            _count: {
               select: {
                  comments: true,
               },
            },
         },

         take: 7,
         skip: 0,
      });

      return posts;
   } catch (error: unknown) {
      console.error(error);

      return [];
   }
};

export default getAllPost;
