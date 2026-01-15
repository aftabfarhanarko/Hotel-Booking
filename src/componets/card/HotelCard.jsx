"use client";
import React, { useState } from "react";
import { Heart, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HotelCard({ room }) {
  const [saved, setSaved] = useState(false);

  const discountedPrice =
    room.priceFrom - (room.priceFrom * room.discount) / 100;

  return (
    <motion.article
      className="max-w-sm rounded-3xl bg-slate-950/95 border border-slate-800 shadow-[0_22px_70px_rgba(15,23,42,0.7)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative">
        <motion.img
          src={room.image}
          alt={room.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        {room.discount > 0 && (
          <div className="absolute top-4 left-4 rounded-full bg-emerald-500 text-white px-3 py-1 text-xs font-semibold shadow-lg shadow-emerald-500/40">
            {room.discount}% off
          </div>
        )}

        <motion.button
          onClick={() => setSaved(!saved)}
          className="absolute top-4 right-4 bg-slate-950/80 text-slate-100 p-2 rounded-full border border-slate-700 shadow-lg"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <Heart
            className={`w-5 h-5 ${
              saved ? "fill-emerald-400 text-emerald-400" : "text-slate-200"
            }`}
          />
        </motion.button>

        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-950/80 text-[11px] font-medium text-slate-100 border border-slate-700/80">
            {room.category}
          </span>
          <div className="flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1 border border-slate-700/80 text-xs text-slate-100">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{room.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4 text-slate-100">
        <div>
          <h3 className="text-lg font-semibold tracking-tight line-clamp-1">
            {room.title}
          </h3>
          <div className="mt-2 flex items-center text-slate-300 text-xs">
            <MapPin className="w-4 h-4 mr-1 text-emerald-300" />
            <span className="truncate">{room.location}</span>
          </div>
        </div>

        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
          {room.description}
        </p>

        {Array.isArray(room.tags) && room.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {room.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-full bg-slate-900 text-[10px] uppercase tracking-[0.16em] text-slate-200 border border-slate-700/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-50">
              {room.rating}
            </span>
            <span className="text-slate-400">
              ({room.reviews} reviews)
            </span>
          </div>
          <span className="text-slate-400">
            {room.saved.toLocaleString()} saved
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div>
            <div className="flex items-baseline gap-2">
              {room.discount > 0 && (
                <span className="text-slate-500 line-through text-xs">
                  ${room.priceFrom}
                </span>
              )}
              <span className="text-xl font-semibold text-emerald-300">
                ${discountedPrice}
              </span>
              <span className="text-slate-400 text-xs">/ night</span>
            </div>
            {typeof room.stock === "number" && room.stock <= 15 && (
              <p className="text-rose-400 text-[11px] mt-1">
                Only {room.stock} left at this price
              </p>
            )}
          </div>
          <Link
            href={`/offers/${room._id}`}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors"
          >
            View details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
