"use client";

import React from "react";

import { merge } from "@/libs";

type Children = React.PropsWithChildren;
type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Variants = "error" | "primary" | "secondary" | "ghost" | "info" | "accent" | "neutral";
type Sizes = "md" | "lg" | "xs" | "sm";

interface ButtonProps extends Children, ButtonAttributes {
   variant?: Variants;
   size?: Sizes;
   outline?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
   const { className, children, variant, size, outline, ...restProps } = props;

   return (
      <button
         className={merge("btn", className, {
            ["btn-primary"]: variant === "primary",
            ["btn-error"]: variant === "error",
            ["btn-secondary"]: variant === "secondary",
            ["btn-ghost"]: variant === "ghost",
            ["btn-info"]: variant === "info",
            ["btn-accent"]: variant === "accent",
            ["btn-neutral"]: variant === "neutral",
            ["btn-md"]: size === "md",
            ["btn-lg"]: size === "lg",
            ["btn-xs"]: size === "xs",
            ["btn-sm"]: size === "sm",

            ["btn-outline"]: outline,
         })}
         {...restProps}
      >
         {children}
      </button>
   );
};

export default Button;
