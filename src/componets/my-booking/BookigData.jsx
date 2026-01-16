"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  User,
  Bed,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  CheckCircle,
  Download,
  XCircle,
  ShieldCheck,
  Star,
  MapPin,
  CreditCard,
  Trash2,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  Luggage,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import { deleteBooking } from "@/actions/server/getData";

const BookigData = ({ data }) => {
  const [bookings, setBookings] = useState(data);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      const result = await deleteBooking(id);

      if (result?.deletedCount > 0) {
        setBookings((prev) => prev.filter((b) => b._id !== id));
        toast.success("Booking cancelled successfully");
      } else {
        toast.error("Failed to cancel booking");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("An error occurred while cancelling");
    } finally {
      setDeletingId(null);
    }
  };

  if (!bookings || bookings.length === 0) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center ring-1 ring-slate-100">
            <Luggage className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
            No bookings yet
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Your journey begins with a single step. Explore our premium
            collection of stays and experiences.
          </p>
          <Link
            href="/offers"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20"
          >
            Start Exploring <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateNights = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights;
  };

  const getStatus = (checkOut) => {
    const today = new Date();
    const end = new Date(checkOut);
    return end < today ? "Completed" : "Confirmed";
  };

  const upcomingBookings = bookings.filter(
    (b) => getStatus(b.checkOut) === "Confirmed"
  ).length;
  const completedBookings = bookings.filter(
    (b) => getStatus(b.checkOut) === "Completed"
  ).length;

  const totalBookings = bookings.length;
  const totalNights = bookings.reduce(
    (sum, b) => sum + calculateNights(b.checkIn, b.checkOut),
    0
  );
  const totalGuests = bookings.reduce(
    (sum, b) => sum + (Number(b.guests) || 0),
    0
  );

  const lastBookingDate = bookings
    .map((b) => b.orderTime)
    .filter(Boolean)
    .sort((a, b) => new Date(b) - new Date(a))[0];

  const roomTypeCounts = bookings.reduce((acc, b) => {
    const type = b.roomType || "Standard";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const favoriteRoomType = Object.keys(roomTypeCounts).sort(
    (a, b) => roomTypeCounts[b] - roomTypeCounts[a]
  )[0];

  return (
    <div className=" min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-6"
              >
                <Sparkles className="w-3 h-3" />
                Premium Concierge
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Reservations
                </span>
              </h1>
              <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
                Manage your upcoming stays and view your booking history.
                We&apos;re here to ensure your experience is seamless from start
                to finish.
              </p>
              <div className="mt-5 -mb-1">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  <div className="flex-shrink-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
                    <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-200 font-semibold">
                      {totalBookings} bookings
                    </span>
                  </div>
                  <div className="flex-shrink-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-200 font-semibold">
                      {totalGuests} guests hosted
                    </span>
                  </div>
                  <div className="flex-shrink-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-200 font-semibold">
                      {totalNights} nights booked
                    </span>
                  </div>
                  {favoriteRoomType && (
                    <div className="flex-shrink-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
                      <Bed className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-slate-200 font-semibold">
                        Favorite: {favoriteRoomType}
                      </span>
                    </div>
                  )}
                  {lastBookingDate && (
                    <div className="flex-shrink-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-slate-200 font-semibold">
                        Last booked: {formatDate(lastBookingDate)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 min-w-[120px]">
                <div className="text-3xl font-bold text-white mb-1">
                  {upcomingBookings}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Upcoming
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 min-w-[120px]">
                <div className="text-3xl font-bold text-white mb-1">
                  {completedBookings}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <motion.div layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {bookings.map((booking, index) => {
              const status = getStatus(booking.checkOut);
              const isCompleted = status === "Completed";
              const isDeletingThis = deletingId === booking._id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  key={booking._id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300"
                >
                  {/* Status Bar */}
                  <div
                    className={`h-1.5 w-full ${
                      isCompleted
                        ? "bg-slate-300"
                        : "bg-gradient-to-r from-amber-400 to-amber-600"
                    }`}
                  />

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {/* Left Column: Main Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                  isCompleted
                                    ? "bg-slate-100 text-slate-500"
                                    : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle className="w-3.5 h-3.5" />
                                ) : (
                                  <CalendarCheck className="w-3.5 h-3.5" />
                                )}
                                {status}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider ring-1 ring-slate-200">
                                <span className="text-slate-400">#</span>
                                {booking._id.slice(-6)}
                              </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-serif group-hover:text-amber-600 transition-colors">
                              {booking.roomName}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                              <MapPin className="w-4 h-4 text-amber-500" />
                              <span>Premium Resort & Spa Location</span>
                            </div>
                          </div>

                          {/* Booking Actions (Desktop) */}
                          <div className="hidden md:flex gap-3">
                            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 transition-colors ring-1 ring-slate-200 shadow-sm">
                              <Download className="w-4 h-4" />
                              Invoice
                            </button>
                            {!isCompleted && (
                              <button
                                onClick={() => handleDelete(booking._id)}
                                disabled={isDeletingThis}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 text-sm font-bold hover:bg-red-100 transition-colors ring-1 ring-red-200/50 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {isDeletingThis ? (
                                  <span className="loading loading-spinner loading-xs"></span>
                                ) : (
                                  <Trash2 className="w-4 h-4" />
                                )}
                                Cancel Booking
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-slate-100">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                              <Calendar className="w-3.5 h-3.5" /> Check In
                            </div>
                            <div className="font-bold text-slate-900 text-xl font-serif">
                              {formatDate(booking.checkIn)}
                            </div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">
                              From 3:00 PM
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                              <Calendar className="w-3.5 h-3.5" /> Check Out
                            </div>
                            <div className="font-bold text-slate-900 text-xl font-serif">
                              {formatDate(booking.checkOut)}
                            </div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">
                              By 11:00 AM
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                              <Users className="w-3.5 h-3.5" /> Guests
                            </div>
                            <div className="font-bold text-slate-900 text-xl font-serif">
                              {booking.guests} Guests
                            </div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">
                              {booking.rooms} Room(s)
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                              <Clock className="w-3.5 h-3.5" /> Duration
                            </div>
                            <div className="font-bold text-slate-900 text-xl font-serif">
                              {calculateNights(
                                booking.checkIn,
                                booking.checkOut
                              )}{" "}
                              Night(s)
                            </div>
                            <div className="text-sm text-emerald-600 font-bold mt-1 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Fully Paid
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-6">
                          <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl ring-1 ring-slate-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm ring-1 ring-slate-100">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900">
                                Secure Booking
                              </div>
                              <div className="text-xs text-slate-500 font-medium">
                                Guaranteed by Hotel
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl ring-1 ring-slate-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm ring-1 ring-slate-100">
                              <Star className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900">
                                Priority Service
                              </div>
                              <div className="text-xs text-slate-500 font-medium">
                                Included with stay
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Guest Details */}
                      <div className="lg:w-80 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 h-fit">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2 pb-4 border-b border-slate-200">
                          <User className="w-4 h-4 text-amber-500" />
                          Guest Details
                        </h4>

                        <div className="space-y-5">
                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Primary Guest
                            </div>
                            <div className="font-bold text-slate-900 text-lg">
                              {booking.firstName}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Contact Email
                            </div>
                            <div className="text-sm font-medium text-slate-700 break-all flex items-center gap-2">
                              <Mail className="w-3.5 h-3.5 text-slate-400" />
                              {booking.customeremail}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Phone Number
                            </div>
                            <div className="text-sm font-medium text-slate-700 flex items-center gap-2">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              {booking.phone}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                              Booking Date
                            </div>
                            <div className="text-sm font-medium text-slate-700 flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {booking.orderTime
                                ? formatDate(booking.orderTime)
                                : "N/A"}
                            </div>
                          </div>
                        </div>

                        {booking.specialRequests && (
                          <div className="mt-6 pt-6 border-t border-slate-200">
                            <div className="flex items-start gap-3">
                              <MessageSquare className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              <div>
                                <div className="text-xs font-bold text-slate-900 mb-1.5">
                                  Special Requests
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed italic bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                                  &quot;{booking.specialRequests}&quot;
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Mobile Actions */}
                        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
                          <button className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-sm active:scale-95 transition-transform">
                            <Download className="w-3.5 h-3.5" /> Invoice
                          </button>
                          {!isCompleted && (
                            <button
                              onClick={() => handleDelete(booking._id)}
                              disabled={isDeletingThis}
                              className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-100 shadow-sm active:scale-95 transition-transform disabled:opacity-50"
                            >
                              {isDeletingThis ? (
                                <span className="loading loading-spinner loading-xs"></span>
                              ) : (
                                <Trash2 className="w-3.5 h-3.5" />
                              )}{" "}
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BookigData;
