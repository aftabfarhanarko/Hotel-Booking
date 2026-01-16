"use client";
import React from "react";
import {
  Calendar,
  Users,
  Bed,
  Mail,
  Phone,
  Clock,
  MessageSquare,
} from "lucide-react";

const BookigData = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
            <Bed className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            No bookings found
          </h3>
          <p className="text-slate-500">
            You do not have any bookings yet. New reservations will appear
            here.
          </p>
        </div>
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

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calculateNights = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights;
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            My bookings
          </h1>
          <p className="text-slate-500">
            See your stays, guest details and special requests in one place.
          </p>
        </div>

        <div className="space-y-5">
          {data.map((booking) => (
            <div
              key={booking._id}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-emerald-400/70 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div className="relative p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3 space-y-3">
                    <div>
                      <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-3">
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                          {booking.roomType}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                        {booking.roomName}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                          <Users className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Guests</div>
                          <div className="text-slate-900 font-semibold">
                            {booking.guests}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-slate-100 rounded-lg">
                          <Bed className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Rooms</div>
                          <div className="text-slate-900 font-semibold">
                            {booking.rooms}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-2">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Guest information
                    </h4>
                    <div className="text-lg font-semibold text-slate-900">
                      {booking.firstName}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-600">
                          {booking.customeremail}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-600">{booking.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-2">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Stay period
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-16 h-16 bg-emerald-50 rounded-xl flex flex-col items-center justify-center border border-emerald-100">
                          <div className="text-xs text-emerald-600 font-medium">
                            Check in
                          </div>
                          <Calendar className="w-5 h-5 text-emerald-600 mt-1" />
                        </div>
                        <div>
                          <div className="text-slate-900 font-semibold">
                            {formatDate(booking.checkIn)}
                          </div>
                          <div className="text-xs text-slate-500">Arrival</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex flex-col items-center justify-center border border-slate-200">
                          <div className="text-xs text-slate-600 font-medium">
                            Check out
                          </div>
                          <Calendar className="w-5 h-5 text-slate-500 mt-1" />
                        </div>
                        <div>
                          <div className="text-slate-900 font-semibold">
                            {formatDate(booking.checkOut)}
                          </div>
                          <div className="text-xs text-slate-500">
                            Departure
                          </div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <div className="text-xs text-slate-500">Total stay</div>
                        <div className="text-emerald-600 font-semibold">
                          {calculateNights(booking.checkIn, booking.checkOut)}{" "}
                          night
                          {calculateNights(
                            booking.checkIn,
                            booking.checkOut
                          ) !== 1
                            ? "s"
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-2">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Booking details
                    </h4>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <div>
                          <div className="text-slate-500 text-xs">
                            Booked on
                          </div>
                          <div className="text-slate-900 font-medium">
                            {booking.orderTime
                              ? formatDate(booking.orderTime)
                              : "N/A"}
                          </div>
                          <div className="text-slate-500 text-xs">
                            {booking.orderTime
                              ? formatTime(booking.orderTime)
                              : ""}
                          </div>
                        </div>
                      </div>

                      {booking.specialRequests && (
                        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                          <div className="flex items-start gap-2 mb-2">
                            <MessageSquare className="w-4 h-4 text-slate-500 mt-0.5" />
                            <div className="text-xs font-semibold text-slate-500 uppercase">
                              Special requests
                            </div>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {booking.specialRequests}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookigData;
