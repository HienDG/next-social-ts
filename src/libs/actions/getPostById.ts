import prisma_db from "@/libs/db";

const getPostById = async (postId: string) => {
   try {
      const post = await prisma_db.post.findUnique({
         where: {
            id: postId,
         },

         include: {
            user: true,
            comments: true,
            _count: {
               select: {
                  comments: true,
               },
            },
         },
      });

      if (!post) throw new Error("Invalid Post Id");

      return post;
   } catch (error: unknown) {
      console.error(error);

      return null;
   }
};

export default getPostById;
