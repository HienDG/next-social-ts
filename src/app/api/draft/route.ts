import { draftValidation } from "@/libs/validators";

export const POST = async (request: Request) => {
   try {
      const data = await request.json();

      const { title, content, coverImage } = draftValidation.parse(data);

      console.log({ title, content, coverImage });

      return Response.json({ message: "Successful" });
   } catch (error) {
      console.log(error);

      return Response.json(
         { message: "Something" },
         {
            status: 500,
         },
      );
   }
};
