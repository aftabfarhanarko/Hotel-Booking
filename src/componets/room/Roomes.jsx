"use client"
import React, { useState } from 'react';
import { Search, Users, Bed, Wifi, Coffee, Tv, Wind, Car, CalendarDays, MapPin, Star, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Roomes = () => {
    const [selectedDate, setSelectedDate] = useState({ checkIn: '', checkOut: '' });
    const [guests, setGuests] = useState(2);
    const [sortBy, setSortBy] = useState('price-low');
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 1000,
        roomType: 'all',
        amenities: []
    });
    const [showFilters, setShowFilters] = useState(false);

    const rooms = [
        {
            id: 1,
            name: "Deluxe Ocean View Suite",
            type: "Suite",
            price: 299,
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
            guests: 4,
            beds: "1 King Bed",
            size: "450 sq ft",
            amenities: ["WiFi", "AC", "TV", "Coffee Maker", "Mini Bar"],
            rating: 4.8,
            reviews: 234,
            available: true
        },
        {
            id: 2,
            name: "Premium King Room",
            type: "King",
            price: 189,
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
            guests: 2,
            beds: "1 King Bed",
            size: "320 sq ft",
            amenities: ["WiFi", "AC", "TV", "Coffee Maker"],
            rating: 4.6,
            reviews: 189,
            available: true
        },
        {
            id: 3,
            name: "Executive Double Room",
            type: "Double",
            price: 159,
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
            guests: 3,
            beds: "2 Double Beds",
            size: "380 sq ft",
            amenities: ["WiFi", "AC", "TV", "Parking"],
            rating: 4.5,
            reviews: 156,
            available: true
        },
        {
            id: 4,
            name: "Presidential Suite",
            type: "Suite",
            price: 599,
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
            guests: 6,
            beds: "2 King Beds + Sofa Bed",
            size: "850 sq ft",
            amenities: ["WiFi", "AC", "TV", "Coffee Maker", "Mini Bar", "Balcony"],
            rating: 4.9,
            reviews: 312,
            available: true
        },
        {
            id: 5,
            name: "Standard Twin Room",
            type: "Twin",
            price: 129,
            image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",
            guests: 2,
            beds: "2 Twin Beds",
            size: "280 sq ft",
            amenities: ["WiFi", "AC", "TV"],
            rating: 4.3,
            reviews: 98,
            available: true
        },
        {
            id: 6,
            name: "Family Suite",
            type: "Suite",
            price: 349,
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
            guests: 5,
            beds: "1 King + 2 Twin Beds",
            size: "620 sq ft",
            amenities: ["WiFi", "AC", "TV", "Coffee Maker", "Mini Bar"],
            rating: 4.7,
            reviews: 203,
            available: true
        }
    ];

    const amenityIcons = {
        "WiFi": <Wifi className="w-4 h-4" />,
        "AC": <Wind className="w-4 h-4" />,
        "TV": <Tv className="w-4 h-4" />,
        "Coffee Maker": <Coffee className="w-4 h-4" />,
        "Parking": <Car className="w-4 h-4" />
    };

    const sortRooms = (rooms) => {
        const sorted = [...rooms];
        switch(sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            default:
                return sorted;
        }
    };

    const filteredRooms = sortRooms(
        rooms.filter(room => {
            if (filters.roomType !== 'all' && room.type !== filters.roomType) return false;
            if (room.price < filters.minPrice || room.price > filters.maxPrice) return false;
            if (room.guests < guests) return false;
            return true;
        })
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Search Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Find Your Perfect Room</h1>
                    
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <CalendarDays className="w-4 h-4 inline mr-1" />
                                    Check-in
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate.checkIn}
                                    onChange={(e) => setSelectedDate({...selectedDate, checkIn: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <CalendarDays className="w-4 h-4 inline mr-1" />
                                    Check-out
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate.checkOut}
                                    onChange={(e) => setSelectedDate({...selectedDate, checkOut: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Users className="w-4 h-4 inline mr-1" />
                                    Guests
                                </label>
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(Number(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                >
                                    {[1,2,3,4,5,6].map(n => (
                                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="flex items-end">
                                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                                    <Search className="w-4 h-4 inline mr-2" />
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Filters and Sort Bar */}
                <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                        </button>
                        
                        <select
                            value={filters.roomType}
                            onChange={(e) => setFilters({...filters, roomType: e.target.value})}
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="all">All Room Types</option>
                            <option value="Suite">Suites</option>
                            <option value="King">King Rooms</option>
                            <option value="Double">Double Rooms</option>
                            <option value="Twin">Twin Rooms</option>
                        </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>

                {/* Price Filter Panel */}
                {showFilters && (
                    <div className="bg-white p-6 rounded-lg shadow mb-6">
                        <h3 className="font-semibold mb-4">Price Range</h3>
                        <div className="flex gap-4 items-center">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Min</label>
                                <input
                                    type="number"
                                    value={filters.minPrice}
                                    onChange={(e) => setFilters({...filters, minPrice: Number(e.target.value)})}
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <span className="mt-6">-</span>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Max</label>
                                <input
                                    type="number"
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Results Count */}
                <p className="text-gray-600 mb-4">{filteredRooms.length} rooms available</p>

                {/* Room Listings */}
                <div className="space-y-6">
                    {filteredRooms.map(room => (
                        <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="md:flex">
                                <div className="md:w-1/3">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                
                                <div className="md:w-2/3 p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{room.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Bed className="w-4 h-4" />
                                                {room.beds}
                                                <span className="mx-2">•</span>
                                                <Users className="w-4 h-4" />
                                                Up to {room.guests} guests
                                                <span className="mx-2">•</span>
                                                {room.size}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded">
                                            <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                                            <span className="font-semibold text-blue-900">{room.rating}</span>
                                            <span className="text-sm text-gray-600">({room.reviews})</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {room.amenities.map((amenity, idx) => (
                                            <div key={idx} className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                                                {amenityIcons[amenity] || <span>•</span>}
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="flex justify-between items-end mt-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Price per night</p>
                                            <p className="text-3xl font-bold text-gray-900">
                                                ${room.price}
                                            </p>
                                            <p className="text-xs text-gray-500">Excludes taxes & fees</p>
                                        </div>
                                        
                                        <div className="flex gap-3">
                                            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                                                View Details
                                            </button>
                                            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                                Book Now
                                            </button>
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

export default Roomes;