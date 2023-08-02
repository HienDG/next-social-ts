"use client";

import React, { useCallback, useEffect, useRef, useState, memo } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import TextareaAutosize from "react-textarea-autosize";
import { UseFormRegister } from "react-hook-form";

import UploadImage from "./UploadImage";

import { uploadFiles } from "@/libs/uploadthing";
import type { DraftValidation } from "@/libs/validators";

interface EditorBlockProps {
   onChange: (data: OutputData) => void;
   data: OutputData;
   register: UseFormRegister<DraftValidation>;
}

const EditorBlock: React.FC<EditorBlockProps> = ({ onChange, data, register }) => {
   // Add a reference to editor
   const editorRef = useRef<EditorJS>();
   const textareaRef = useRef<HTMLTextAreaElement>(null);

   const [isMounted, setIsMounted] = useState<boolean>(false);

   const { ref: titleRef, ...restProps } = register("title");

   // initialize editorJS
   const initializeEditor = useCallback(async () => {
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const Embed = (await import("@editorjs/embed")).default;
      const List = (await import("@editorjs/list")).default;
      const Code = (await import("@editorjs/code")).default;
      const LinkTool = (await import("@editorjs/link")).default;
      const InlineCode = (await import("@editorjs/inline-code")).default;
      const ImageTool = (await import("@editorjs/image")).default;
      const Quote = (await import("@editorjs/quote")).default;

      if (!editorRef.current) {
         const editor = new EditorJS({
            holder: "editor",
            placeholder: "Use Tab to open the command menu.",
            inlineToolbar: true,
            data: data,

            onChange: async (api) => {
               const data = await api.saver.save();
               onChange(data);
            },

            onReady: () => {
               editorRef.current = editor;
            },

            tools: {
               header: Header,

               linkTool: {
                  class: LinkTool,
                  config: {
                     endpoint: "/api/link",
                  },
               },
               list: List,
               code: Code,
               inlineCode: InlineCode,
               embed: {
                  class: Embed,
                  inlineToolbar: true,
               },
               quote: Quote,
               image: {
                  class: ImageTool,
                  inlineToolbar: true,
                  config: {
                     uploader: {
                        async uploadByFile(file: File) {
                           // upload to uploadthing
                           const [res] = await uploadFiles({
                              files: [file],
                              endpoint: "imageUploader",
                           });

                           return {
                              success: 1,
                              file: {
                                 url: res.fileUrl,
                              },
                           };
                        },
                     },
                  },
               },
            },
         });
      }
   }, [data, onChange]);

   useEffect(() => {
      if (typeof window !== "undefined") {
         setIsMounted(true);

         textareaRef.current?.focus();
      }
   }, []);

   useEffect(() => {
      const init = async () => {
         await initializeEditor();
      };

      if (isMounted) {
         init();

         //add a return function handle cleanup
         return () => {
            if (editorRef.current && editorRef.current.destroy) {
               // eslint-disable-next-line react-hooks/exhaustive-deps
               editorRef.current.destroy();

               editorRef.current = undefined;
            }
         };
      }
   }, [initializeEditor, isMounted]);

   return (
      <div className="w-full h-full">
         <div className="md:pt-8 pb-4 lg:px-16 md:px-12 sm:p-5 p-2 pt-3">
            <UploadImage />

            <div>
               <TextareaAutosize
                  placeholder="New Post Title here..."
                  className="w-full overflow-hidden focus:outline-0 placeholder:font-semibold focus:border-none focus:shadow-none focus:ring-0 lg:text-4xl md:text-2xl text-xl font-bold bg-transparent appearance-none resize-none focus:outline-none outline-none border-none p-0"
                  ref={(e) => {
                     titleRef(e);
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     //@ts-ignore
                     textareaRef.current = e;
                  }}
                  {...restProps}
               />
            </div>
         </div>

         <div className="lg:px-16 md:px-12 sm:px-5 p-2">
            <div id="editor" className="prose prose-stone"></div>
         </div>
      </div>
   );
};
export default memo(EditorBlock);
