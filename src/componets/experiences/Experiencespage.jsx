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
  Leaf,
  Accessibility,
  BookOpen,
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
    <div className="min-h-screen bg-white text-slate-900 pt-26">
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Experiences</h1>
          <p className="mt-3 text-amber-700">
            Curated moments designed for comfort, culture, and discovery
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Wellness", Icon: Bath },
            { title: "Dining", Icon: Utensils },
            { title: "Fitness", Icon: Dumbbell },
            { title: "Rooftop", Icon: Sun },
          ].map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <h.Icon className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-semibold">{h.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 12).map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-100 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <f.Icon className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Average Rating", value: "4.8" },
            { title: "Happy Guests", value: "12k+" },
            { title: "Support", value: "24/7" },
            { title: "Events", value: "50+" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-100 p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-amber-600">{s.value}</p>
              <p className="text-slate-600">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm"
            >
              <p className="text-slate-800">{t.quote}</p>
              <p className="mt-4 text-sm text-amber-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-amber-100">
              <img src={src} alt="Experience" className="w-full h-40 md:h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Suites", desc: "Design-forward rooms", Icon: Bed },
            { title: "Family", desc: "Connected spaces", Icon: Users },
            { title: "Transfers", desc: "Private rides", Icon: Car },
            { title: "City Tours", desc: "Local gems", Icon: MapPin },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <c.Icon className="w-6 h-6 text-amber-600" />
                <div>
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="text-sm text-slate-600">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Barista Class", Icon: Coffee },
            { title: "Yoga Flow", Icon: Dumbbell },
            { title: "Sunset Set", Icon: Music },
            { title: "Trail Ride", Icon: Bike },
            { title: "Skyview", Icon: Plane },
            { title: "Rooftop Brunch", Icon: Sun },
          ].map((e, i) => (
            <div key={i} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <e.Icon className="w-6 h-6 text-amber-600" />
                <h4 className="font-semibold">{e.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Members Lounge", Icon: Star },
            { title: "Priority Booking", Icon: CalendarRange },
            { title: "Welcome Gift", Icon: Coffee },
            { title: "Premium Wi‑Fi", Icon: Wifi },
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <m.Icon className="w-6 h-6 text-amber-600" />
                <h4 className="font-semibold">{m.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { q: "Can I modify bookings?", a: "Yes, with flexible plans." },
            { q: "Is airport transfer included?", a: "Available as an add-on." },
            { q: "Do you offer family packages?", a: "Multiple options available." },
            { q: "Is Wi‑Fi free?", a: "Premium Wi‑Fi for members." },
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <p className="font-semibold">{f.q}</p>
              <p className="text-slate-600 mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold">Stay in the loop</h3>
              <p className="text-slate-600 mt-1">Get curated experiences via email</p>
            </div>
            <div className="md:col-span-2 flex gap-3">
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="you@example.com"
              />
              <button className="px-5 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-amber-600 rounded-2xl p-6 md:p-8 text-center shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to book your stay?</h2>
          <p className="mt-2 text-white/90">
            Choose your suite and add experiences to your itinerary
          </p>
          <div className="mt-5 flex justify-center">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-amber-50 transition">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Sustainability Commitment</h2>
          <p className="text-slate-600">Thoughtful practices for a better stay and planet</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { t: "Energy Efficient", d: "Smart lighting and HVAC" },
            { t: "Waste Reduction", d: "Recycling & refill stations" },
            { t: "Local Sourcing", d: "Community-first suppliers" },
            { t: "Eco Amenities", d: "Biodegradable essentials" },
          ].map((i, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Leaf className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-semibold">{i.t}</p>
                  <p className="text-sm text-slate-600">{i.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Accessibility & Inclusivity</h2>
          <p className="text-slate-600">Comfortable stays for every guest</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { t: "Step-free Access", d: "Elevators and ramps" },
            { t: "Assistive Services", d: "On-call support" },
            { t: "Inclusive Rooms", d: "Adapted layouts" },
            { t: "Visual Contrast", d: "High-legibility design" },
          ].map((i, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Accessibility className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-semibold">{i.t}</p>
                  <p className="text-sm text-slate-600">{i.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Event Calendar Preview</h2>
          <p className="text-slate-600">Upcoming experiences to plan around</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { m: "March", e: "Sunset Set" },
            { m: "April", e: "Chef&apos;s Table" },
            { m: "May", e: "Rooftop Brunch" },
          ].map((c, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <CalendarRange className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-semibold">{c.m}</p>
                  <p className="text-sm text-slate-600">{c.e}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Chef & Mixology Spotlight</h2>
          <p className="text-slate-600">Signature culinary moments</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Utensils className="w-6 h-6 text-amber-600" />
              <p className="font-semibold">Chef&apos;s Table</p>
            </div>
            <p className="mt-2 text-slate-600">Seasonal tasting menu</p>
          </div>
          <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Coffee className="w-6 h-6 text-amber-600" />
              <p className="font-semibold">Mixology Class</p>
            </div>
            <p className="mt-2 text-slate-600">Craft signature cocktails</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Partner Brands</h2>
          <p className="text-slate-600">Collaborations that elevate your stay</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["Maison Aura", "Café Noble", "Studio Fit", "Vista Tours", "Amber Co.", "Urban Craft"].map(
            (b, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-amber-600" />
                  <p className="font-semibold">{b}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Interactive Map</h2>
          <p className="text-slate-600">Explore nearby highlights</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Modern Museum", d: "1.2 km" },
            { t: "Riverfront Park", d: "0.8 km" },
            { t: "Artisanal Market", d: "1.5 km" },
          ].map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-semibold">{p.t}</p>
                  <p className="text-sm text-slate-600">{p.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencesNow;
