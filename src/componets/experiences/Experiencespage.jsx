"use client";
import React from "react";
import {
  Bath,
  UtensilsCrossed,
  Wine,
  Sun,
  BedDouble,
  Users,
  CarFront,
  Leaf,
  Accessibility,
  Calendar,
  Star,
  Music,
  Bike,
  Dumbbell,
} from "lucide-react";

const highlightFeatures = [
  {
    title: "Signature Spa Journey",
    desc: "90-minute personalized rituals",
    Icon: Bath,
  },
  {
    title: "Chef’s Table Experience",
    desc: "8-course seasonal tasting menu",
    Icon: UtensilsCrossed,
  },
  {
    title: "Rooftop Sunset Lounge",
    desc: "Champagne & panoramic golden hour",
    Icon: Sun,
  },
  {
    title: "Private Mixology",
    desc: "Craft signature cocktails with our bartender",
    Icon: Wine,
  },
  {
    title: "Curated City Journeys",
    desc: "Exclusive local insider experiences",
    Icon: Bike,
  },
  {
    title: "Wellness Sanctuary",
    desc: "Yoga, sound healing & private training",
    Icon: Dumbbell,
  },
];

const keyHighlights = [
  { value: "4.9/5", label: "Guest Experience Rating" },
  { value: "200+", label: "Curated Experiences" },
  { value: "24/7", label: "Personal Concierge" },
  { value: "Carbon Neutral", label: "Since 2024" },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    quote:
      "The rooftop sunset with champagne and the spa ritual made this the most memorable stay of my life.",
    location: "Dubai",
  },
  {
    name: "James Chen",
    quote:
      "Chef’s Table was an absolute masterpiece. Worth planning the whole trip around.",
    location: "Singapore",
  },
];

const quickFacts = [
  { title: "Signature Spa", desc: "Open daily 9 AM – 10 PM", Icon: Bath },
  { title: "Rooftop Lounge", desc: "Sunset session 5:30 – 8:00 PM", Icon: Sun },
  {
    title: "Chef’s Table",
    desc: "Thu–Sun | Reservation required",
    Icon: UtensilsCrossed,
  },
  {
    title: "Private Transfer",
    desc: "Complimentary for suites",
    Icon: CarFront,
  },
];

const ExperiencesPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-5 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Curated Experiences
        </h1>
        <p className="mt-5 text-xl text-amber-700 max-w-2xl mx-auto">
          Moments of refined luxury, authentic discovery, and deep relaxation
        </p>
      </section>

      {/* Main Highlight Features - Most important part */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {highlightFeatures.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-amber-100/60 p-7 hover:border-amber-300 transition-all duration-300 hover:shadow-xl"
            >
              <item.Icon
                className="w-9 h-9 text-amber-600 mb-5"
                strokeWidth={1.8}
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-amber-50/40 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {keyHighlights.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - full width feel */}
      <section className="max-w-[1400px] mx-auto px-5 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
            "https://images.unsplash.com/photo-1578683015146-b644c1c9b0c0",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6",
            "https://images.unsplash.com/photo-1611892440504-42a792a0327d",
            "https://images.unsplash.com/photo-1571896349842-077c29d8acb3",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-amber-50 shadow-sm"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts / Schedule */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">At a Glance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-amber-50 p-6 text-center hover:shadow-md transition"
            >
              <item.Icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - fewer but stronger */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Moments</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-amber-50 shadow-sm"
            >
              <p className="text-lg italic text-slate-700 mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Signature Journey
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Limited availability for signature experiences — reserve your dates
            today
          </p>
          <button className="bg-white text-amber-900 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-amber-50 transition">
            View Available Experiences & Book
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
