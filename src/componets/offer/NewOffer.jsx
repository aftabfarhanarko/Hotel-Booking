"use client";
import React, { useState, useEffect } from "react";
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

const NewOffer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDiscount, setSelectedDiscount] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { id: "all", name: "All Stays", icon: Bed },
    { id: "romantic", name: "Romantic Escape", icon: Heart },
    { id: "family", name: "Family Stay", icon: Users },
    { id: "business", name: "Business Trip", icon: Wifi },
    { id: "wellness", name: "Wellness Retreat", icon: Bath },
    { id: "lastminute", name: "Last Minute", icon: Clock },
  ];

  const discountTypes = [
    { id: "all", name: "Any Offer" },
    { id: "10-20", name: "10-20% Off" },
    { id: "20-35", name: "20-35% Off" },
    { id: "35-50", name: "35-50% Off" },
    { id: "50+", name: "50%+ Off" },
  ];

  const offers = [
    {
      id: 1,
      title: "Skyline Suite with City View",
      discount: 35,
      category: "romantic",
      timeLeft: "Ends in 6h 15m",
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 280,
      rating: 4.8,
      reviews: 234,
      saved: 1240,
      location: "Downtown, New York",
    },
    {
      id: 2,
      title: "Family Connecting Rooms",
      discount: 25,
      category: "family",
      timeLeft: "Tonight only",
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 210,
      rating: 4.9,
      reviews: 456,
      saved: 2100,
      location: "Oceanfront, Miami",
    },
    {
      id: 3,
      title: "Executive Room with Workspace",
      discount: 30,
      category: "business",
      timeLeft: "Ends in 10h",
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e0bd0bff31?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 190,
      rating: 4.7,
      reviews: 189,
      saved: 890,
      location: "Financial District, London",
    },
    {
      id: 4,
      title: "Spa Suite with Private Balcony",
      discount: 40,
      category: "wellness",
      timeLeft: "Ends in 3h 20m",
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 320,
      rating: 4.9,
      reviews: 567,
      saved: 3200,
      location: "Cliffside, Santorini",
    },
    {
      id: 5,
      title: "Deluxe King Room",
      discount: 22,
      category: "lastminute",
      timeLeft: "Check‑in within 24h",
      stock: 9,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 170,
      rating: 4.6,
      reviews: 321,
      saved: 1800,
      location: "City Center, Paris",
    },
    {
      id: 6,
      title: "Garden View Twin Room",
      discount: 18,
      category: "family",
      timeLeft: "Ends in 12h",
      stock: 14,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 150,
      rating: 4.8,
      reviews: 412,
      saved: 1560,
      location: "Green District, Vienna",
    },
    {
      id: 7,
      title: "Corner Suite with Lounge Access",
      discount: 28,
      category: "business",
      timeLeft: "Ends in 5h 40m",
      stock: 3,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 340,
      rating: 4.7,
      reviews: 289,
      saved: 2340,
      location: "Harborfront, Singapore",
    },
    {
      id: 8,
      title: "Poolside Room with Terrace",
      discount: 32,
      category: "romantic",
      timeLeft: "Weekend only",
      stock: 6,
      image:
        "https://images.unsplash.com/photo-1578894382208-80b99e6e6227?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 260,
      rating: 4.5,
      reviews: 198,
      saved: 1120,
      location: "Resort Zone, Bali",
    },
    {
      id: 9,
      title: "Wellness Stay with Spa Credit",
      discount: 38,
      category: "wellness",
      timeLeft: "Ends tomorrow",
      stock: 7,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 295,
      rating: 4.9,
      reviews: 534,
      saved: 2890,
      location: "Thermal Spa, Budapest",
    },
    {
      id: 10,
      title: "Studio Room for Solo Travel",
      discount: 20,
      category: "business",
      timeLeft: "Ends in 9h 30m",
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 140,
      rating: 4.6,
      reviews: 276,
      saved: 1450,
      location: "Old Town, Lisbon",
    },
    {
      id: 11,
      title: "Suite with Private Jacuzzi",
      discount: 42,
      category: "romantic",
      timeLeft: "Ends in 5h 05m",
      stock: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 360,
      rating: 4.9,
      reviews: 387,
      saved: 1670,
      location: "Hillside, Lake Como",
    },
    {
      id: 12,
      title: "Late Check‑out City Break",
      discount: 28,
      category: "lastminute",
      timeLeft: "Check‑in tonight",
      stock: 7,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 185,
      rating: 4.7,
      reviews: 234,
      saved: 1340,
      location: "Central Station, Berlin",
    },
    {
      id: 13,
      title: "Family Suite with Kids Club",
      discount: 33,
      category: "family",
      timeLeft: "Ends in 6h 50m",
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 240,
      rating: 4.9,
      reviews: 512,
      saved: 2230,
      location: "Beachfront, Dubai",
    },
    {
      id: 14,
      title: "Design Loft with City Skyline",
      discount: 27,
      category: "business",
      timeLeft: "Ends in 4h 20m",
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 310,
      rating: 4.5,
      reviews: 167,
      saved: 980,
      location: "Downtown, Toronto",
    },
    {
      id: 15,
      title: "Airport Hotel Day Use Room",
      discount: 24,
      category: "business",
      timeLeft: "2h 40m left",
      stock: 9,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 120,
      rating: 4.6,
      reviews: 298,
      saved: 1540,
      location: "Airport Zone, Amsterdam",
    },
    {
      id: 16,
      title: "Extended Stay Studio",
      discount: 30,
      category: "business",
      timeLeft: "7h 55m left",
      stock: 11,
      image:
        "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 155,
      rating: 4.7,
      reviews: 345,
      saved: 1890,
      location: "Business Park, Tokyo",
    },
    {
      id: 17,
      title: "Rooftop Pool Suite",
      discount: 38,
      category: "romantic",
      timeLeft: "3h 25m left",
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e0bd0bff31?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 330,
      rating: 4.8,
      reviews: 223,
      saved: 1270,
      location: "Skyline District, Bangkok",
    },
    {
      id: 18,
      title: "Wellness Retreat with Yoga",
      discount: 34,
      category: "wellness",
      timeLeft: "5h 45m left",
      stock: 6,
      image:
        "https://images.unsplash.com/photo-1523419409543-3e4f83b9b4c7?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 275,
      rating: 4.6,
      reviews: 189,
      saved: 1120,
      location: "Mountain Spa, Innsbruck",
    },
    {
      id: 19,
      title: "Panoramic Suite with Balcony",
      discount: 45,
      category: "romantic",
      timeLeft: "1h 55m left",
      stock: 2,
      image:
        "https://images.unsplash.com/photo-1590490359854-dfba19688d70?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 390,
      rating: 4.9,
      reviews: 467,
      saved: 2560,
      location: "Clifftop, Madeira",
    },
    {
      id: 20,
      title: "Family Room with Breakfast",
      discount: 26,
      category: "family",
      timeLeft: "8h 20m left",
      stock: 9,
      image:
        "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 195,
      rating: 4.7,
      reviews: 401,
      saved: 2010,
      location: "Parkside, Copenhagen",
    },
    {
      id: 21,
      title: "Resort Villa with Private Pool",
      discount: 48,
      category: "romantic",
      timeLeft: "4h 10m left",
      stock: 1,
      image:
        "https://images.unsplash.com/photo-1519822464081-1de346d6ca1b?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 520,
      rating: 4.8,
      reviews: 312,
      saved: 1780,
      location: "Island Retreat, Maldives",
    },
    {
      id: 22,
      title: "Presidential Suite Signature Stay",
      discount: 50,
      category: "romantic",
      timeLeft: "2h 30m left",
      stock: 1,
      image:
        "https://images.unsplash.com/photo-1598273544790-9e3c620a1a90?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 780,
      rating: 4.9,
      reviews: 589,
      saved: 3450,
      location: "Luxury District, Dubai Marina",
    },
    {
      id: 23,
      title: "Countryside Manor Stay",
      discount: 29,
      category: "wellness",
      timeLeft: "6h 40m left",
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 210,
      rating: 4.6,
      reviews: 267,
      saved: 1450,
      location: "Countryside, Provence",
    },
    {
      id: 24,
      title: "Lakefront Cabin Escape",
      discount: 31,
      category: "family",
      timeLeft: "3h 55m left",
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop",
      priceFrom: 230,
      rating: 4.7,
      reviews: 298,
      saved: 1620,
      location: "Lakeside, Zurich",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const filteredOffers = offers.filter((offer) => {
    const categoryMatch =
      selectedCategory === "all" || offer.category === selectedCategory;
    const searchMatch = offer.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let discountMatch = true;
    if (selectedDiscount !== "all") {
      const discount = offer.discount;
      if (selectedDiscount === "10-20")
        discountMatch = discount >= 10 && discount < 20;
      if (selectedDiscount === "20-35")
        discountMatch = discount >= 20 && discount < 35;
      if (selectedDiscount === "35-50")
        discountMatch = discount >= 35 && discount < 50;
      if (selectedDiscount === "50+") discountMatch = discount >= 50;
    }

    return categoryMatch && searchMatch && discountMatch;
  });

  const getDiscountColor = (discount) => {
    if (discount >= 70) return "from-red-500 to-pink-600";
    if (discount >= 50) return "from-orange-500 to-red-500";
    if (discount >= 30) return "from-yellow-500 to-orange-500";
    return "from-green-500 to-teal-500";
  };

  const getStockStatus = (stock) => {
    if (stock < 30)
      return { text: "Low Stock", color: "text-red-600 bg-red-50" };
    if (stock < 100)
      return { text: "Limited", color: "text-orange-600 bg-orange-50" };
    return { text: "In Stock", color: "text-green-600 bg-green-50" };
  };

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
                <div className="text-3xl font-bold">{offers.length}+</div>
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
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
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
          </div>

          {/* Discount Filter */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {filteredOffers.length} hotel offers available
          </h2>
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 font-semibold text-gray-700">
            <option>Sort by: Featured</option>
            <option>Highest Discount</option>
            <option>Lowest Price</option>
            <option>Ending Soon</option>
            <option>Most Popular</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOffers.map((offer, index) => {
            const stockStatus = getStockStatus(offer.stock);
            const isFavorite = favorites.includes(offer.id);

            return (
              <div
                key={offer.id}
                onMouseEnter={() => setHoveredCard(offer.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${getDiscountColor(
                    offer.discount
                  )} text-white px-4 py-2 rounded-xl shadow-lg font-bold text-lg transform group-hover:scale-110 transition-transform`}
                >
                  {offer.discount}% OFF
                </div>

                <button
                  onClick={() => toggleFavorite(offer.id)}
                  className="absolute top-4 right-4 z-10 bg-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {offer.location && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate max-w-[160px]">
                        {offer.location}
                      </span>
                    </div>
                  )}
                  {hoveredCard === offer.id && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
                        View details
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${stockStatus.color}`}
                    >
                      {stockStatus.text}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">
                        {offer.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({offer.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {offer.title}
                  </h3>

                  {offer.priceFrom && (
                    <div className="flex items-baseline gap-2 mb-3">
                      <div className="text-xl font-bold text-slate-900">
                        ${offer.priceFrom}
                      </div>
                      <div className="text-xs text-gray-500">per night</div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-red-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold text-sm">
                        {offer.timeLeft}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">{offer.stock}</span> left
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>{offer.saved} people saved</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${Math.min((offer.stock / 200) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                      <Bed className="w-5 h-5" />
                      Book now
                    </button>
                    <button className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"
                    style={{ opacity: 0.1 }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No offers found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
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
