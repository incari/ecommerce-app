import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TripCardSkeleton = () => {
  return (
    <Skeleton className="flex h-96 lg:h-[250px]  w-full items-center justify-between bg-gray-600 p-4 shadow-lg rounded-3xl"></Skeleton>
  );
};

export default TripCardSkeleton;
