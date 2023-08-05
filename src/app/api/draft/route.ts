import { draftValidation } from "@/libs/validators";
import { getCurrentUser } from "@/libs/actions";
import prisma_db from "@/libs/db";

export const POST = async (request: Request) => {
   try {
      const currentUser = await getCurrentUser();

      if (!currentUser) throw new Error("User not logged in");

      const data = await request.json();

      const { title, content, coverImage } = draftValidation.parse(data);

      const newPost = await prisma_db.post.create({
         data: {
            title,
            userId: currentUser.id,
            content,
            coverImage,
         },
      });

      return Response.json({ message: "Successful", data: newPost });
   } catch (error) {
      return Response.json(
         { message: "Something went wrong" },
         {
            status: 500,
         },
      );
   }
};
