import bcrypt from "bcrypt";

import prisma_db from "@/libs/db";
import { signUpValidation } from "@/libs/validators";

export const POST = async (request: Request) => {
   try {
      const data = await request.json();

      const { email, password, username } = signUpValidation.parse(data);

      const salt = await bcrypt.genSalt(12);

      const myHashPassword = await bcrypt.hash(password, salt);

      const newUser = await prisma_db.user.create({
         data: {
            email: email,
            password: myHashPassword,
            name: username,
         },
      });

      return Response.json({ message: "Successful", data: newUser });
   } catch (error: unknown) {
      return Response.json({ message: "Something went wrong" }, { status: 500 });
   }
};
