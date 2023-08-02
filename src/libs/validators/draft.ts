import { z } from "zod";

const draftValidation = z.object({
   title: z
      .string()
      .min(3, {
         message: "Title must be at least 3 characters long",
      })
      .max(300, {
         message: "Title must be less than 128 characters long",
      }),
   content: z.any(),
   coverImage: z.string().nullish(),
});

export type DraftValidation = z.infer<typeof draftValidation>;

export default draftValidation;
