import React from "react";

const SkeletonCard = () => {
  return (
    <div className="max-w-sm rounded-3xl bg-slate-950/95 border border-slate-800 shadow-[0_22px_70px_rgba(15,23,42,0.7)] overflow-hidden animate-pulse">
      <div className="h-64 w-full bg-slate-800" />
      <div className="p-5 space-y-4">
        <div className="h-4 w-3/4 bg-slate-800 rounded-md" />
        <div className="h-3 w-1/2 bg-slate-800 rounded-md" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-800 rounded-md" />
          <div className="h-3 w-5/6 bg-slate-800 rounded-md" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-slate-800 rounded-full" />
          <div className="h-6 w-12 bg-slate-800 rounded-full" />
          <div className="h-6 w-20 bg-slate-800 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="space-y-2">
            <div className="h-4 w-24 bg-slate-800 rounded-md" />
            <div className="h-3 w-32 bg-slate-800 rounded-md" />
          </div>
          <div className="h-9 w-24 bg-slate-800 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

const Cardloading = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="h-6 w-48 bg-slate-200 rounded-md animate-pulse" />
          <div className="h-9 w-40 bg-slate-200 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 my-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cardloading;
