"use client";
import React, { useState } from "react";
import { Heart, MapPin, Star } from "lucide-react";
import Link from "next/link";

export default function HotelCard({ room }) {
  const [saved, setSaved] = useState(false);

  const discountedPrice =
    room.priceFrom - (room.priceFrom * room.discount) / 100;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-64 object-cover"
        />

        {/* Discount Badge */}
        {room.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {room.discount}% OFF
          </div>
        )}

        {/* Save Button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${
              saved ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
          {room.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{room.title}</h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{room.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center mb-4">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-semibold text-gray-800 mr-1">
            {room.rating}
          </span>
          <span className="text-gray-600 text-sm">
            ({room.reviews} reviews)
          </span>
          <span className="text-gray-400 mx-2">•</span>
          <span className="text-gray-600 text-sm">
            {room.saved.toLocaleString()} saved
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <div className="flex items-baseline gap-2">
              {room.discount > 0 && (
                <span className="text-gray-400 line-through text-sm">
                  ${room.priceFrom}
                </span>
              )}
              <span className="text-2xl font-bold text-gray-800">
                ${discountedPrice}
              </span>
              <span className="text-gray-600 text-sm">/ night</span>
            </div>
            {room.stock <= 15 && (
              <p className="text-red-500 text-xs mt-1">
                Only {room.stock} left!
              </p>
            )}
          </div>
          {/* <Link> </Link> */}
          <Link
            href={`/offers/${room._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
