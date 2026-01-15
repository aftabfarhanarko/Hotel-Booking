import React from "react";

const Detlicesloading = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-950">
      <section className="relative w-full h-52 md:h-72 lg:h-80 overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="h-6 w-40 rounded-full bg-slate-700/70 mb-4 animate-pulse" />
          <div className="space-y-3 max-w-xl w-full flex flex-col items-center">
            <div className="h-8 w-3/4 rounded-lg bg-slate-700/80 animate-pulse" />
            <div className="h-8 w-2/3 rounded-lg bg-slate-700/60 animate-pulse" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <div className="h-7 w-16 rounded-full bg-slate-700/70 animate-pulse" />
            <div className="h-7 w-24 rounded-full bg-slate-700/70 animate-pulse" />
            <div className="h-7 w-24 rounded-full bg-slate-700/70 animate-pulse" />
          </div>
        </div>
      </section>

      <div className="max-w-10/12 mx-auto px-4">
        <header className="mb-10">
          <div className="h-4 w-36 rounded-full bg-slate-700/80 mb-3 animate-pulse" />
          <div className="h-10 w-2/3 rounded-lg bg-slate-700/80 mb-4 animate-pulse" />
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-7 w-40 rounded-full bg-slate-800 animate-pulse" />
            <div className="h-6 w-32 rounded-full bg-slate-800 animate-pulse" />
            <div className="h-6 w-24 rounded-full bg-slate-800 animate-pulse" />
            <div className="h-6 w-40 rounded-full bg-slate-800 animate-pulse" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10">
          <main className="space-y-8">
            <section className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl bg-slate-800/90 border border-slate-700 shadow-[0_30px_90px_rgba(15,23,42,0.6)]">
                <div className="w-full h-[320px] md:h-[420px] bg-slate-700 animate-pulse" />
                <div className="absolute top-4 left-4 h-7 w-32 rounded-full bg-emerald-500/60 animate-pulse" />
                <div className="absolute top-4 right-4 h-7 w-28 rounded-full bg-slate-900/80 border border-slate-700 animate-pulse" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/5 to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 sm:h-28 md:h-32 rounded-2xl bg-slate-800 border border-slate-700 animate-pulse" />
                <div className="h-24 sm:h-28 md:h-32 rounded-2xl bg-slate-800 border border-slate-700 animate-pulse" />
                <div className="h-24 sm:h-28 md:h-32 rounded-2xl bg-slate-800 border border-slate-700 animate-pulse" />
              </div>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-800/95 border border-slate-700 px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.55)]">
              <div className="h-5 w-40 rounded-md bg-slate-700 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded-md bg-slate-700/80 animate-pulse" />
                <div className="h-4 w-11/12 rounded-md bg-slate-700/70 animate-pulse" />
                <div className="h-4 w-10/12 rounded-md bg-slate-700/60 animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="h-7 w-20 rounded-full bg-slate-900/80 border border-slate-700/80 animate-pulse" />
                <div className="h-7 w-24 rounded-full bg-slate-900/80 border border-slate-700/80 animate-pulse" />
                <div className="h-7 w-16 rounded-full bg-slate-900/80 border border-slate-700/80 animate-pulse" />
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-800/95 border border-slate-700 p-5 space-y-3 shadow-[0_18px_50px_rgba(15,23,42,0.55)]">
                <div className="h-4 w-28 rounded-md bg-slate-700/80 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-36 rounded-md bg-slate-700 animate-pulse" />
                  <div className="h-4 w-32 rounded-md bg-slate-700/80 animate-pulse" />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800/95 border border-slate-700 p-5 space-y-3 shadow-[0_18px_50px_rgba(15,23,42,0.55)]">
                <div className="h-4 w-24 rounded-md bg-slate-700/80 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-40 rounded-md bg-slate-700 animate-pulse" />
                  <div className="h-3 w-32 rounded-md bg-slate-700/70 animate-pulse" />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800/95 border border-slate-700 p-5 space-y-3 shadow-[0_18px_50px_rgba(15,23,42,0.55)]">
                <div className="h-4 w-32 rounded-md bg-slate-700/80 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-28 rounded-md bg-slate-700 animate-pulse" />
                  <div className="h-3 w-36 rounded-md bg-slate-700/70 animate-pulse" />
                  <div className="h-3 w-32 rounded-md bg-slate-700/60 animate-pulse" />
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-800/95 border border-slate-700 px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.55)]">
              <div className="flex items-center justify-between">
                <div className="h-5 w-28 rounded-md bg-slate-700 animate-pulse" />
                <div className="h-4 w-20 rounded-md bg-slate-700/80 animate-pulse" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="h-9 rounded-xl bg-slate-900/60 border border-slate-700/80 animate-pulse" />
                <div className="h-9 rounded-xl bg-slate-900/60 border border-slate-700/80 animate-pulse" />
                <div className="h-9 rounded-xl bg-slate-900/60 border border-slate-700/80 animate-pulse" />
                <div className="h-9 rounded-xl bg-slate-900/60 border border-slate-700/80 animate-pulse" />
                <div className="h-9 rounded-xl bg-slate-900/60 border border-slate-700/80 animate-pulse" />
                <div className="h-9 rounded-xl bg-slate-900/60 border border-slate-700/80 animate-pulse" />
              </div>
            </section>
          </main>

          <aside className="lg:col-span-1">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_28px_90px_rgba(15,23,42,0.85)] border border-slate-800 p-6 space-y-6 backdrop-blur-xl">
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="h-8 w-32 rounded-md bg-slate-700 animate-pulse" />
                  <div className="h-6 w-20 rounded-full bg-emerald-500/30 animate-pulse" />
                </div>
                <div className="h-3 w-56 rounded-md bg-slate-700/70 animate-pulse" />
                <div className="h-3 w-40 rounded-md bg-rose-500/30 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs border border-slate-800 rounded-2xl p-3 bg-slate-900/80 shadow-[0_16px_40px_rgba(15,23,42,0.65)]">
                <div className="space-y-2">
                  <div className="h-4 w-24 rounded-md bg-slate-700/80 animate-pulse" />
                  <div className="h-4 w-full rounded-md bg-slate-700 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-28 rounded-md bg-slate-700/80 animate-pulse" />
                  <div className="h-4 w-full rounded-md bg-slate-700 animate-pulse" />
                </div>
                <div className="col-span-2 flex items-center justify-between pt-2 border-t border-slate-800">
                  <div className="h-4 w-32 rounded-md bg-slate-700/80 animate-pulse" />
                  <div className="h-4 w-40 rounded-md bg-slate-700/80 animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 w-24 rounded-md bg-slate-700/80 animate-pulse" />
                  <div className="h-9 w-full rounded-lg bg-slate-800 border border-slate-700 animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="h-4 w-20 rounded-md bg-slate-700/80 animate-pulse" />
                    <div className="h-9 w-full rounded-lg bg-slate-800 border border-slate-700 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-20 rounded-md bg-slate-700/80 animate-pulse" />
                    <div className="h-9 w-full rounded-lg bg-slate-800 border border-slate-700 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-900/80 border border-slate-800 p-4 text-xs text-slate-100 shadow-[0_16px_42px_rgba(15,23,42,0.7)]">
                <div className="h-4 w-32 rounded-md bg-slate-700/80 mb-2 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-48 rounded-md bg-slate-700 animate-pulse" />
                  <div className="h-4 w-56 rounded-md bg-slate-700/90 animate-pulse" />
                  <div className="h-4 w-52 rounded-md bg-slate-700/80 animate-pulse" />
                  <div className="h-4 w-44 rounded-md bg-slate-700/70 animate-pulse" />
                </div>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-900/95 border border-slate-800 p-4 text-sm text-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.7)]">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-48 rounded-md bg-slate-700/90 animate-pulse" />
                  <div className="h-5 w-20 rounded-md bg-emerald-500/50 animate-pulse" />
                </div>
                <div className="h-3 w-64 rounded-md bg-slate-700/70 mt-2 animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="h-11 w-full rounded-lg bg-emerald-500/80 animate-pulse" />
                <div className="h-3 w-64 mx-auto rounded-md bg-slate-700/80 animate-pulse" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Detlicesloading;
