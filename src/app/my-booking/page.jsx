import { mybookingData } from "@/actions/server/getData";
import BookigData from "@/componets/my-booking/BookigData";
import React from "react";

const My_bookingpage = async () => {
  const data = await mybookingData();
  console.log("User Data", data);

  return (
    <div className="min-h-screen bg-white pt-40 pb-12">
      <BookigData data={data} />
    </div>
  );
};

export default My_bookingpage;
