import React from "react";

const PostLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div>
         <main className="bg-base-200">{children}</main>
      </div>
   );
};
export default PostLayout;
