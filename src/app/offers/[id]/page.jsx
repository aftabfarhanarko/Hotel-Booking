import { singleData } from "@/actions/server/getData";
import { MapPin, Star, Bed, Users, Clock } from "lucide-react";

const OfferDetailsPage = async ({ params }) => {
  const { id } = await params;


  // ✅ data fetch
  const item = await singleData(id);
 console.log(item);
 
 

  return (
    <div className=" max-w-10/12 mx-auto pt-40">
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>

      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <MapPin size={18} />
        <span>{item.location || "Unknown location"}</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Star size={18} className="text-yellow-500" />
        <span>{item.rating || 4.5}</span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <Bed size={18} /> {item.beds || 2} Beds
        </div>
        <div className="flex items-center gap-1">
          <Users size={18} /> {item.guests || 3} Guests
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Clock size={16} />
        <span>{item.timeLeft || "Limited time offer"}</span>
      </div>
    </div>
  );
};

export default OfferDetailsPage;
