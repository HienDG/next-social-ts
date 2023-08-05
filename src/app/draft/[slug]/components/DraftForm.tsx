"use client";

import React, { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { User } from "@prisma/client";
import type { OutputData } from "@editorjs/editorjs";

import { FormController, Button } from "@/components/ui";
import DraftHeader from "./DraftHeader";
import ReviewBlock from "./ReviewBlock";

import { useSelectedFile, useModalStore } from "@/hooks";
import { draftValidation, type DraftValidation } from "@/libs/validators";
import { HOME_URL } from "@/utils/constants";

const EditorBlock = dynamic(() => import("./EditorBlock"), {
   ssr: false,
});

export type ModeView = "editor" | "preview";

interface DraftFormProps {
   user: User;
}

const DraftForm: React.FC<DraftFormProps> = () => {
   const router = useRouter();
   const [mode, setMode] = useState<ModeView>("editor");
   const [title, setTitle] = useState<string>("");
   const [data, setData] = useState<OutputData>({
      blocks: [],
   });
   const { file, onRemove } = useSelectedFile();
   const { onClose, onOpen } = useModalStore();

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm<DraftValidation>({
      resolver: zodResolver(draftValidation),
      mode: "onChange",
   });

   const { mutate: createNewPost, isLoading } = useMutation({
      mutationFn: async ({ title, content, coverImage }: DraftValidation) => {
         const payload: DraftValidation = { title, content, coverImage };
         const { data } = await axios.post("/api/draft", payload);
         return data;
      },
      onError: () => {
         toast.error("Something went wrong");
      },
      onSuccess: () => {
         onRemove(); // clear file input
         router.refresh(); // refresh page
         router.push(HOME_URL); // navigate to Home page
      },
   });

   const onToggleMode = useCallback(() => {
      setMode((prev) => (prev === "editor" ? "preview" : "editor"));

      setTitle(() => getValues("title"));
   }, [getValues]);

   const onSubmit: SubmitHandler<DraftValidation> = ({ title }) => {
      const newPost: DraftValidation = {
         title,
         content: data,
         coverImage: file,
      };

      createNewPost(newPost);
   };

   useEffect(() => {
      if (Object.keys(errors).length) {
         for (const [, value] of Object.entries(errors)) {
            toast.error(value.message as string);
         }
      }
   }, [errors]);

   useEffect(() => {
      if (isLoading) {
         onOpen("loading");
      }

      return () => {
         onClose();
      };
   }, [isLoading, onClose, onOpen]);

   return (
      <FormController
         className="grid md:px-4 px-2 max-w-7xl mx-auto text-base h-screen md:gap-x-4 grid-rows-[min-content_1fr_min-content] md:grid-cols-[64px_7fr_3fr] grid-cols-[100%]"
         onSubmit={handleSubmit(onSubmit)}
      >
         <DraftHeader mode={mode} onChangeMode={onToggleMode} />
         <div className="lg:col-start-2 lg:col-span-1 md:col-span-2 md:row-start-2 w-full bg-base-100 rounded-lg shadow-sm flex flex-col h-[calc(100vh-56px-88px)] right-1 overflow-y-auto prose max-w-full">
            {mode === "editor" ? (
               <EditorBlock onChange={setData} data={data} register={register} />
            ) : (
               <ReviewBlock data={data} title={title} />
            )}
         </div>
         <div className="lg:col-start-2 md:col-span-2 row-start-3 w-full h-[88px] lg:col-span-1 flex items-center">
            <Button variant="primary" className="h-10" type="submit">
               Publish
            </Button>
         </div>
      </FormController>
   );
};
export default DraftForm;
