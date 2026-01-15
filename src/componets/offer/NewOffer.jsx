"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Bed,
  Users,
  Clock,
  Star,
  Bath,
  Wifi,
  MapPin,
  Heart,
  Share2,
  Bell,
  Filter,
  Search,
  CheckCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import HotelCard from "../card/HotelCard";

const NewOffer = ({ data }) => {
  const router = useRouter();
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedDiscount, setSelectedDiscount] = useState("all");
  // const [favorites, setFavorites] = useState([]);
  // const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // console.log(data);

  // const categories = [
  //   { id: "all", name: "All Stays", icon: Bed },
  //   { id: "romantic", name: "Romantic Escape", icon: Heart },
  //   { id: "family", name: "Family Stay", icon: Users },
  //   { id: "business", name: "Business Trip", icon: Wifi },
  //   { id: "wellness", name: "Wellness Retreat", icon: Bath },
  //   { id: "lastminute", name: "Last Minute", icon: Clock },
  // ];

  // const discountTypes = [
  //   { id: "all", name: "Any Offer" },
  //   { id: "10-20", name: "10-20% Off" },
  //   { id: "20-35", name: "20-35% Off" },
  //   { id: "35-50", name: "35-50% Off" },
  //   { id: "50+", name: "50%+ Off" },
  // ];

  // const offers = useMemo(() => {
  //   if (!Array.isArray(data)) return [];
  //   return data.map((item, index) => ({
  //     id: item._id?.toString?.() || String(index),
  //     title: item.title,
  //     discount: item.discount,
  //     category: item.category,
  //     stock: item.stock,
  //     image: item.image,
  //     priceFrom: item.priceFrom,
  //     rating: item.rating,
  //     reviews: item.reviews,
  //     saved: item.saved,
  //     location: item.location,
  //     timeLeft: item.timeLeft || "Ends soon",
  //     raw: item,
  //   }));
  // }, [data]);

  // const toggleFavorite = (id) => {
  //   setFavorites((prev) =>
  //     prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
  //   );
  //   setShowNotification(true);
  //   setTimeout(() => setShowNotification(false), 2000);
  // };

  // const filteredOffers = data.filter((offer) => {
  //   const categoryMatch =
  //     selectedCategory === "all" || offer.category === selectedCategory;
  //   const searchMatch = offer.title
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());

  //   let discountMatch = true;
  //   if (selectedDiscount !== "all") {
  //     const discount = offer.discount;
  //     if (selectedDiscount === "10-20")
  //       discountMatch = discount >= 10 && discount < 20;
  //     if (selectedDiscount === "20-35")
  //       discountMatch = discount >= 20 && discount < 35;
  //     if (selectedDiscount === "35-50")
  //       discountMatch = discount >= 35 && discount < 50;
  //     if (selectedDiscount === "50+") discountMatch = discount >= 50;
  //   }

  //   return categoryMatch && searchMatch && discountMatch;
  // });

  return (
    <div className="min-h-screen bg-white pt-30">
      {/* Animated Background Elements */}

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl transform animate-bounce">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Added to favorites!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative text-white overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-900/95" />

        <div
          className="relative container mx-auto px-4 py-20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-pulse">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold text-sm">
                NEW HOTEL OFFERS JUST ADDED
              </span>
              <Sparkles className="w-5 h-5" />
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Stay in style
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 text-transparent bg-clip-text">
                Save on premium rooms
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Curated hotel stays, suites, and escapes with flexible policies
              and limited‑time pricing.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
                {/* <div className="text-3xl font-bold">{offers.length}+</div> */}
                <div className="text-sm opacity-90">Handpicked stays</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
                <div className="text-3xl font-bold">75%</div>
                <div className="text-sm opacity-90">
                  Up to off nightly rates
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm opacity-90">
                  Flexible check‑in options
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rooms, suites, or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <div className="flex gap-3 items-center">
              <button className="flex items-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold">
                <Filter className="w-5 h-5" />
                <span>Refine search</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-all font-semibold">
                <Bell className="w-5 h-5" />
                <span>Price alerts</span>
              </button>
            </div>
          </div>

          {/* Category Pills */}
          {/* <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div> */}

          {/* Discount Filter */}
          {/* <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
            {discountTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedDiscount(type.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                  selectedDiscount === type.id
                    ? "bg-orange-500 text-white shadow"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type.name}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {/* {filteredOffers.length} hotel offers available */}
          </h2>
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 font-semibold text-gray-700">
            <option>Sort by: Featured</option>
            <option>Highest Discount</option>
            <option>Lowest Price</option>
            <option>Ending Soon</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>
      <h1>Hotel Avable {data.length}</h1>

      {/* Hotel Card */}
      <div className=" max-w-10/12 mx-auto grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {data.map((room) => (
          <HotelCard key={room._id} room={room}></HotelCard>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NewOffer;
