import React, { Fragment } from "react";

import { LoadingSkeleton } from "@/components/ui";

const Loading: React.FC = () => {
   return (
      <Fragment>
         <LoadingSkeleton />
         <LoadingSkeleton />
         <LoadingSkeleton />
         <LoadingSkeleton />
         <LoadingSkeleton />
      </Fragment>
   );
};

export default Loading;
