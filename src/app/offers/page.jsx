import { getHotelData } from "@/actions/server/getData";
import NewOffer from "@/componets/offer/NewOffer";
import React from "react";

const Offerspage = async () => {
  const data = await getHotelData();
  console.log("This is Da", data);
  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-32 pb-16">
      <NewOffer data={data} />
    </div>
  );
};

export default Offerspage;
