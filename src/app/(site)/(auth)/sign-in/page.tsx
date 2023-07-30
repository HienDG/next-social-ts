"use client";

import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toaster from "react-hot-toast";
import { signIn } from "next-auth/react";

import { Button, InputField, FormController } from "@/components/ui";

import { SIGN_UP_URL } from "@/utils/constants";
import { signInValidation, type SignInValidation } from "@/libs/validators";

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
   const {
      register,
      reset,
      formState: { errors, isDirty, isValid },
      handleSubmit,
   } = useForm<SignInValidation>({
      resolver: zodResolver(signInValidation),
      mode: "onChange",
      defaultValues: {
         password: "",
         email: "",
      },
   });

   const onSubmit: SubmitHandler<SignInValidation> = async ({ email, password }) => {
      try {
         const res = await signIn("credentials", { email, password, redirect: false });

         if (!res?.ok) throw new Error(res?.error);

         reset(); // clear all data input if login successful
      } catch (error: unknown) {
         let errorMessage = "Something went wrong";
         if (typeof error === "string") errorMessage = error;
         toaster.error(errorMessage);
      }
   };

   return (
      <FormController
         className="mt-8 grid grid-cols-1 gap-4"
         onSubmit={handleSubmit(onSubmit)}
      >
         <InputField
            label="Email"
            id="Email"
            type="email"
            className="h-10"
            errorMessage={errors.email?.message}
            {...register("email")}
         />

         <InputField
            label="Password"
            id="Password"
            type="password"
            className="h-10"
            errorMessage={errors.password?.message}
            {...register("password")}
         />

         <Button
            type="submit"
            className="w-full"
            variant="primary"
            disabled={!isDirty || !isValid}
         >
            Sign In
         </Button>

         <p className="mt-4 w-full text-center text-sm text-gray-500">
            Don`t have an account?
            <Link
               href={SIGN_UP_URL}
               className="text-gray-700 underline ml-1 hover:text-primary"
            >
               Sign up
            </Link>
            .
         </p>
      </FormController>
   );
};
export default SignInPage;
