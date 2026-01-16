import React from "react";

const RootLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-2 border-slate-700 border-t-amber-400 animate-spin" />
          <div className="absolute inset-1 rounded-full border border-slate-800/70" />
        </div>
        <p className="text-sm text-slate-300 tracking-[0.2em] uppercase">
          Loading
        </p>
      </div>
    </div>
  );
};

export default RootLoading;

