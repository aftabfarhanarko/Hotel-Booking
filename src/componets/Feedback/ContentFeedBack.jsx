"use client";
import React from "react";
import {
  Star,
  Heart,
  MapPin,
  BedDouble,
  Bath,
  UtensilsCrossed,
  Wifi,
  Shield,
  Clock,
  CarFront,
  Users,
  Sparkles,
  KeyRound,
} from "lucide-react";

const features = [
  {
    Icon: BedDouble,
    title: "Thoughtfully Designed Rooms",
    description:
      "Soft lighting, layered textures, and premium bedding for deep, restorative rest.",
  },
  {
    Icon: MapPin,
    title: "Heart-of-the-City Locations",
    description:
      "Stay minutes from business districts, cultural spots, and nightlife.",
  },
  {
    Icon: Bath,
    title: "Spa-Level Bathrooms",
    description:
      "Rain showers, plush towels, and elevated amenities in every room category.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Signature Dining & Rooftop",
    description:
      "From slow breakfasts to rooftop sundowners, every meal is curated.",
  },
  {
    Icon: Wifi,
    title: "Fast, Reliable WiFi",
    description:
      "Work calls, streaming, and content sharing without any drop in pace.",
  },
  {
    Icon: Clock,
    title: "Flexible Check-In Options",
    description:
      "Early arrivals and late departures supported whenever availability allows.",
  },
  {
    Icon: CarFront,
    title: "Seamless Arrival Experience",
    description:
      "Airport transfers, valet parking, and quick lobby check-in for every stay.",
  },
  {
    Icon: Shield,
    title: "Safety & Peace of Mind",
    description:
      "24/7 security, monitored access, and hygiene standards you can trust.",
  },
  {
    Icon: Users,
    title: "Guest-First Service",
    description:
      "A concierge team trained to understand your preferences and anticipate needs.",
  },
  {
    Icon: KeyRound,
    title: "Smart Room Controls",
    description:
      "Digital keys, lighting, and temperature that adapt to your comfort.",
  },
  {
    Icon: Sparkles,
    title: "Curated Experiences",
    description:
      "City tours, wellness sessions, and private events designed for modern travelers.",
  },
  {
    Icon: Star,
    title: "Consistently Loved by Guests",
    description:
      "High satisfaction scores across stays, events, and long-weekend escapes.",
  },
];

const stayTypes = [
  {
    label: "Business stays",
    title: "Plug-in and present-ready",
    description:
      "Desk-friendly rooms, quiet zones, and lobby spaces designed for quick calls between meetings.",
    highlight: "Same-day laundry and flexible checkout for late flights.",
  },
  {
    label: "Couples & celebrations",
    title: "Evenings that feel cinematic",
    description:
      "Soft lighting, rooftop views, and in-room touches made for anniversaries and weekends away.",
    highlight: "Curated dining and surprise room setups on request.",
  },
  {
    label: "Extended stays",
    title: "A longer stay that feels like home",
    description:
      "Spacious layouts, storage for luggage, and everyday comforts when you are in the city for more than a few nights.",
    highlight: "Preferential rates and priority support for repeat guests.",
  },
];

const promisePoints = [
  {
    title: "Clear communication",
    description:
      "Instant confirmations, pre-arrival messages, and quick answers before you even check in.",
  },
  {
    title: "Consistent standards",
    description:
      "The same warm welcome, made bed, and ready room — no matter which floor or room type you book.",
  },
  {
    title: "Human support, 24/7",
    description:
      "Real people at the desk and on chat whenever travel plans shift or you need something extra.",
  },
  {
    title: "Always improving",
    description:
      "We review every rating and comment to adjust the small details of your next stay.",
  },
];

const ContentFeedback = () => {
  return (
    <section className="bg-white text-slate-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[-10rem] w-[32rem] h-[32rem] bg-slate-900/70 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold text-amber-800 border border-amber-100 mb-4">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Why guests choose our stays</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Designed around how you actually travel
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-6 max-w-xl">
              From first tap on the booking button to your final checkout, every
              touchpoint in our hotel is built to feel smooth, intuitive, and
              genuinely welcoming.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="font-semibold text-slate-900">4.9 / 5 average stay rating</p>
                <p className="text-slate-500 text-xs">
                  Based on verified guest reviews across all room types.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">12</p>
                <p className="text-slate-500 text-xs">
                  Core features crafted for modern city stays.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200"
                alt="Guests relaxing in a modern hotel lobby"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <Heart className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Guests say it feels like “home, but elevated”.
                </p>
                <p className="text-xs text-slate-500">
                  Seamless arrivals, warm staff, and intuitive spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              12 features guests notice first
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 max-w-xl">
              Every detail is tuned to make your stay smoother, calmer, and more
              memorable — whether you are here for work, rest, or celebration.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-100">
                <item.Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Built for different ways of staying
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Whether you are checking in for a quick night, a city break, or a
              multi-week project, our spaces flex with the way you travel.
            </p>
            <div className="mt-8 space-y-5">
              {stayTypes.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 hover:border-amber-200 hover:bg-white transition-all"
                >
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-600 mb-1">
                    {item.label}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-amber-700 font-medium">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-900 text-slate-50 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.45)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-semibold tracking-[0.24em] uppercase text-amber-200 border border-slate-700 mb-4">
              <Star className="w-3.5 h-3.5 text-amber-300" />
              <span>Our service promise</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              What you can always expect with us
            </h3>
            <p className="text-sm text-slate-300 mb-5">
              Every stay is backed by a simple promise: clear communication,
              consistent spaces, and people who genuinely care about your time
              here.
            </p>
            <div className="space-y-4">
              {promisePoints.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-3.5 h-3.5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="rounded-3xl border border-slate-900/60 bg-slate-950/95 px-6 py-7 sm:px-8 sm:py-9 shadow-[0_28px_80px_rgba(15,23,42,0.9)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-400">
                  Global stays network
                </p>
                <h2 className="mt-2 text-xl md:text-2xl font-semibold text-white">
                  Connected locations across the map
                </h2>
                <p className="mt-2 text-sm md:text-base text-slate-300 max-w-xl">
                  We are expanding a connected collection of stays across key cities
                  so every check-in feels familiar, wherever you land.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.35)]" />
                <span>Active locations</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -left-10 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
                <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
              </div>
              <svg
                viewBox="0 0 1200 500"
                className="relative h-[260px] w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="75%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
                    <stop offset="35%" stopColor="#020617" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                  </radialGradient>
                  <linearGradient id="arc" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                  </linearGradient>
                  <pattern
                    id="dotGrid"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.3" fill="#0f172a" />
                  </pattern>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="1200"
                  height="500"
                  fill="url(#dotGrid)"
                />
                <rect
                  x="0"
                  y="0"
                  width="1200"
                  height="500"
                  fill="url(#mapGlow)"
                  opacity="0.95"
                />

                <path
                  d="M180 320 C 320 190 460 160 590 210 S 880 260 1040 190"
                  fill="none"
                  stroke="url(#arc)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M260 340 C 380 260 520 260 660 310 S 860 360 980 320"
                  fill="none"
                  stroke="url(#arc)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M420 340 C 540 240 720 215 860 255 S 980 260 1080 225"
                  fill="none"
                  stroke="url(#arc)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                <g>
                  <circle cx="190" cy="320" r="6" fill="#020617" />
                  <circle cx="190" cy="320" r="3.2" fill="#38bdf8" />
                  <circle cx="190" cy="320" r="9.5" fill="#38bdf8" opacity="0.22" />
                </g>
                <g>
                  <circle cx="320" cy="360" r="6" fill="#020617" />
                  <circle cx="320" cy="360" r="3.2" fill="#38bdf8" />
                  <circle cx="320" cy="360" r="9.5" fill="#38bdf8" opacity="0.22" />
                </g>
                <g>
                  <circle cx="510" cy="290" r="6" fill="#020617" />
                  <circle cx="510" cy="290" r="3.2" fill="#38bdf8" />
                  <circle cx="510" cy="290" r="9.5" fill="#38bdf8" opacity="0.22" />
                </g>
                <g>
                  <circle cx="700" cy="250" r="6" fill="#020617" />
                  <circle cx="700" cy="250" r="3.2" fill="#38bdf8" />
                  <circle cx="700" cy="250" r="9.5" fill="#38bdf8" opacity="0.22" />
                </g>
                <g>
                  <circle cx="880" cy="260" r="6" fill="#020617" />
                  <circle cx="880" cy="260" r="3.2" fill="#38bdf8" />
                  <circle cx="880" cy="260" r="9.5" fill="#38bdf8" opacity="0.22" />
                </g>
                <g>
                  <circle cx="1040" cy="220" r="6" fill="#020617" />
                  <circle cx="1040" cy="220" r="3.2" fill="#38bdf8" />
                  <circle cx="1040" cy="220" r="9.5" fill="#38bdf8" opacity="0.22" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFeedback;
