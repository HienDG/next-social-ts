"use client";

import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toaster from "react-hot-toast";
import { signIn } from "next-auth/react";

import { Button, InputField, FormController } from "@/components/ui";

import { SIGN_IN_URL } from "@/utils/constants";
import { signUpValidation, type SignUpValidation } from "@/libs/validators";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
   const {
      register,
      reset,
      formState: { errors, isDirty, isValid },
      handleSubmit,
   } = useForm<SignUpValidation>({
      resolver: zodResolver(signUpValidation),
      mode: "onChange",
      defaultValues: {
         username: "",
         password: "",
         email: "",
         confirmPassword: "",
      },
   });

   const onSubmit: SubmitHandler<SignUpValidation> = async (data) => {
      const { email, password, username, confirmPassword } = data;

      try {
         await axios.post("/api/auth/sign-up", { email, password, username, confirmPassword });

         const res = await signIn("credentials", { email, password, redirect: false });

         if (!res?.ok) throw new Error(res?.error);

         reset(); // clear all user input if sign up successfully
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
            label="Username"
            id="Username"
            type="text"
            className="h-10"
            errorMessage={errors.username?.message}
            {...register("username")}
         />
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

         <InputField
            label="Confirm Password"
            type="password"
            id="ConfirmPassword"
            className="h-10"
            errorMessage={errors.confirmPassword?.message}
            {...register("confirmPassword")}
         />

         <Button
            type="submit"
            className="w-full"
            variant="primary"
            disabled={!isDirty || !isValid}
         >
            Sign Up
         </Button>

         <p className="mt-4 w-full text-center text-sm text-gray-500">
            Already have an account?
            <Link
               href={SIGN_IN_URL}
               className="text-gray-700 underline ml-1 hover:text-primary"
            >
               Log in
            </Link>
            .
         </p>
      </FormController>
   );
};
export default SignUpPage;
