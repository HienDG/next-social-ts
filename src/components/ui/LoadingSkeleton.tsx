"use client";

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

interface LoadingSkeletonProps {}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = () => {
   return (
      <div className="w-full h-full mb-4">
         <SkeletonTheme width="100%" baseColor="#e2e2e2" highlightColor="#cccd">
            <Skeleton height={275} />

            <div className="p-4 bg-white lg:p-5">
               <div className="flex items-center gap-2">
                  <Skeleton height={36} width={36} circle />
                  <Skeleton count={2} width={200} />
               </div>
               <div className="my-4 mr-4">
                  <Skeleton height={100} width="100%" />
               </div>
            </div>
         </SkeletonTheme>
      </div>
   );
};
export default LoadingSkeleton;
