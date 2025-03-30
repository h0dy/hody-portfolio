import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Music } from "lucide-react";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const NowPlayingSkelton = () => {
  return (
    <div className="">
      <div className="flex gap-x-2 items-center mb-4">
        <Music />
        <p className="text-xl font-semibold">Listening to</p>
      </div>
      <div className="now-playing-card">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex gap-x-2 items-center">
          <Skeleton className="w-2 h-4" />
          <Skeleton className="w-2 h-10" />
          <Skeleton className="w-2 h-8" />
        </div>
      </div>
    </div>
  );
};

export default NowPlayingSkelton;
