"use client";
import React from "react";
import {
  Bath,
  Utensils,
  Coffee,
  Sun,
  Bed,
  Users,
  Car,
  Plane,
  Bike,
  Dumbbell,
  Music,
  Wifi,
  MapPin,
  CalendarRange,
  Star,
} from "lucide-react";

const features = [
  { title: "Luxury Spa", desc: "Relax with signature treatments", Icon: Bath },
  { title: "Fine Dining", desc: "Gourmet cuisines and wine pairing", Icon: Utensils },
  { title: "Premium Coffee", desc: "Artisan brews and latte art", Icon: Coffee },
  { title: "Sunset Rooftop", desc: "Golden hour views and lounge", Icon: Sun },
  { title: "Signature Suites", desc: "Curated comfort and design", Icon: Bed },
  { title: "Family Packages", desc: "Multi-room and activities", Icon: Users },
  { title: "Airport Transfer", desc: "Private chauffeur service", Icon: Car },
  { title: "City Tours", desc: "Curated local experiences", Icon: MapPin },
  { title: "Adventure Trips", desc: "Nearby trails and bikes", Icon: Bike },
  { title: "Fitness Studio", desc: "Modern equipment and trainers", Icon: Dumbbell },
  { title: "Live Music", desc: "Evening performances", Icon: Music },
  { title: "Fast Wi‑Fi", desc: "Seamless work and stream", Icon: Wifi },
  { title: "Flexible Booking", desc: "Plan with confidence", Icon: CalendarRange },
  { title: "Top Rated", desc: "Guests love staying here", Icon: Star },
];

const testimonials = [
  { name: "Aisha K.", quote: "Rooftop sunset and spa were unforgettable." },
  { name: "Daniel R.", quote: "Dining experience rivals Michelin spots." },
  { name: "Meera S.", quote: "Family package made our trip effortless." },
];

const gallery = [
  "https://images.unsplash.com/photo-1551882547-e3792552d30d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578894382208-80b99e6e6227?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501117716987-c8e0bd0bff31?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
];

const ExperiencesNow = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Experiences</h1>
          <p className="mt-3 text-amber-200">
            Curated moments designed for comfort, culture, and discovery
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 12).map((f, i) => (
            <div
              key={i}
              className="bg-slate-900/80 rounded-2xl ring-1 ring-white/10 p-5 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3">
                <f.Icon className="w-6 h-6 text-amber-500" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2 text-white/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 rounded-2xl ring-1 ring-white/10 p-6 text-center">
            <p className="text-3xl font-bold text-amber-500">4.8</p>
            <p className="text-white/70">Average Rating</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl ring-1 ring-white/10 p-6 text-center">
            <p className="text-3xl font-bold text-amber-500">12k+</p>
            <p className="text-white/70">Happy Guests</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl ring-1 ring-white/10 p-6 text-center">
            <p className="text-3xl font-bold text-amber-500">24/7</p>
            <p className="text-white/70">Support</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl ring-1 ring-white/10 p-6 text-center">
            <p className="text-3xl font-bold text-amber-500">50+</p>
            <p className="text-white/70">Curated Events</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-900/80 rounded-2xl ring-1 ring-white/10 p-6 shadow-lg"
            >
              <p className="text-white/90">{t.quote}</p>
              <p className="mt-4 text-sm text-amber-200">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden ring-1 ring-white/10">
              <img src={src} alt="Experience" className="w-full h-40 md:h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-amber-600 rounded-2xl p-6 md:p-8 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to book your stay?</h2>
          <p className="mt-2 text-white/90">
            Choose your suite and add experiences to your itinerary
          </p>
          <div className="mt-5 flex justify-center">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesNow;
