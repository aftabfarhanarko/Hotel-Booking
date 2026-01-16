"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Filter,
  Bell,
  Sparkles,
} from "lucide-react";
import HotelCard from "../card/HotelCard";

const NewOffer = ({ data = [] }) => {
  // State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    if (!Array.isArray(data)) return ["All"];
    const cats = new Set(data.map((item) => item.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [data]);

  // Max price for slider
  const maxPrice = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return 1000;
    return Math.max(...data.map((item) => item.priceFrom || 0), 1000);
  }, [data]);

  // Filter and Sort Logic
  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    let result = [...data];

    // Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(lowerTerm) ||
          item.location?.toLowerCase().includes(lowerTerm) ||
          item.description?.toLowerCase().includes(lowerTerm)
      );
    }

    // Category
    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Price
    result = result.filter(
      (item) =>
        (item.priceFrom || 0) >= priceRange[0] &&
        (item.priceFrom || 0) <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => (a.priceFrom || 0) - (b.priceFrom || 0));
        break;
      case "price-high":
        result.sort((a, b) => (b.priceFrom || 0) - (a.priceFrom || 0));
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "discount":
        result.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default: // featured or default
        break;
    }

    return result;
  }, [data, searchTerm, selectedCategory, priceRange, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero / Header Section */}

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

      <div className=" mx-auto max-w-10/12 px-4 -mt-8 relative z-20">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by hotel, location..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle (Mobile) & Sort */}
            <div className="flex gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex-1 md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 rounded-xl font-medium text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>

              <div className="relative flex-1 md:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-white focus:border-amber-500 outline-none cursor-pointer text-slate-700 font-medium"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="discount">Best Discount</option>
                </select>
                <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          <div
            className={`mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-6 ${
              isFilterOpen ? "block" : "hidden md:grid"
            }`}
          >
            {/* Category Filter */}
            <div className="col-span-1 md:col-span-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">
                Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-white shadow-md shadow-amber-200"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="col-span-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">
                Max Price: ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => {
                  setPriceRange([0, parseInt(e.target.value)]);
                  setCurrentPage(1);
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>$0</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className=" mx-auto max-w-10/12 px-4 py-12">
        <div className="mb-6 text-slate-500 text-sm font-medium">
          Showing {paginatedData.length} of {filteredData.length} stays
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paginatedData.map((room) => (
              <HotelCard key={room._id || room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No matches found
            </h3>
            <p className="text-slate-500 mt-2">
              Try adjusting your filters or search term.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setPriceRange([0, maxPrice]);
                setCurrentPage(1);
              }}
              className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-11 h-11 rounded-xl font-bold transition-all ${
                  currentPage === page
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-200"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewOffer;
