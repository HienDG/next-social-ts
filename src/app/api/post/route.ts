import { NextResponse } from "next/server";
import { z } from "zod";

import prisma_db from "@/libs/db";

export const GET = async (request: Request) => {
   const url = new URL(request.url);

   try {
      const { limit, page } = z
         .object({
            limit: z.string(),
            page: z.string(),
         })
         .parse({
            limit: url.searchParams.get("limit"),
            page: url.searchParams.get("page"),
         });

      const posts = await prisma_db.post.findMany({
         orderBy: {
            created_at: "desc",
         },

         include: {
            comments: true,
            user: true,
         },
         take: parseInt(limit),
         skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
      });

      return NextResponse.json(posts);
   } catch (error: unknown) {
      return NextResponse.json("Something went wrong", {
         status: 400,
      });
   }
};
