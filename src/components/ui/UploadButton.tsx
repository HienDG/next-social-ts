"use client";

import React from "react";
import { CldUploadButton } from "next-cloudinary";

import Button from "./Button";

import { merge } from "@/libs";
import { UPLOAD_PRESETS } from "@/utils/constants";

type ButtonProps = React.ComponentProps<typeof Button>;

interface UploadButtonProps extends ButtonProps {
   className?: string;
   // eslint-disable-next-line @typescript-eslint/ban-types
   onUpload: Function;
}

const UploadButton: React.FC<UploadButtonProps> = ({
   variant,
   outline,
   size,
   className,
   children,
   onUpload,
}) => {
   return (
      <CldUploadButton options={{ maxFiles: 1 }} onUpload={onUpload} uploadPreset={UPLOAD_PRESETS}>
         <div
            className={merge("btn  text-base", className, {
               ["btn-primary"]: variant === "primary",
               ["btn-error"]: variant === "error",
               ["btn-secondary"]: variant === "secondary",
               ["btn-ghost"]: variant === "ghost",
               ["btn-info"]: variant === "info",
               ["btn-accent text-white"]: variant === "accent",
               ["btn-neutral"]: variant === "neutral",
               ["btn-md"]: size === "md",
               ["btn-lg"]: size === "lg",
               ["btn-xs"]: size === "xs",
               ["btn-sm"]: size === "sm",

               ["btn-outline"]: outline,
            })}
         >
            {children}
         </div>
      </CldUploadButton>
   );
};
export default UploadButton;
