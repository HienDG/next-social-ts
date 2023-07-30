"use client";

import React from "react";

interface FormControllerProps
   extends React.PropsWithChildren,
      React.FormHTMLAttributes<HTMLFormElement> {}

const FormController: React.FC<FormControllerProps> = ({ children, ...restProps }) => {
   return <form {...restProps}>{children}</form>;
};
export default FormController;
