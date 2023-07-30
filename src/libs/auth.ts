import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { z } from "zod";
import type { AuthOptions } from "next-auth";

import prisma_db from "./db";
import { signInValidation } from "./validators";

type Adapter = AuthOptions["adapter"];

const stringSchema = z.string();

const GOOGLE_CLIENT_ID = stringSchema.parse(process.env.GOOGLE_CLIENT_ID);
const GOOGLE_CLIENT_SECRET = stringSchema.parse(process.env.GOOGLE_CLIENT_SECRET);

const GITHUB_ID = stringSchema.parse(process.env.GITHUB_ID);
const GITHUB_SECRET = stringSchema.parse(process.env.GITHUB_SECRET);

export const authOptions: AuthOptions = {
   adapter: PrismaAdapter(prisma_db) as Adapter,
   providers: [
      CredentialsProvider({
         name: "Credentials",

         credentials: {
            email: { label: "email", type: "email" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            const result = signInValidation.safeParse(credentials);

            if (!result.success) throw new Error("Invalid Credentials");

            const { email, password } = result.data;

            // get record by email
            const currentUser = await prisma_db.user.findUnique({
               where: {
                  email,
               },
            });

            // check if user does not exists
            if (!currentUser || !currentUser.password) throw new Error("User does not exists");

            // compare password
            const isCorrectPassword = await bcrypt.compare(password, currentUser.password);

            if (!isCorrectPassword) throw new Error("Password does not correct");

            return currentUser;
         },
      }),

      GoogleProvider({
         clientId: GOOGLE_CLIENT_ID,
         clientSecret: GOOGLE_CLIENT_SECRET,
      }),
      GitHubProvider({
         clientId: GITHUB_ID,
         clientSecret: GITHUB_SECRET,
      }),
   ],
   pages: {
      signIn: "/sign-in",
   },
   secret: process.env.NEXTAUTH_SECRET,
   debug: process.env.NODE_ENV === "development",
   session: {
      strategy: "jwt",
   },
};
