"use client";

import TripCard from "@/components/TripCard";
import { featuredMultiMarket } from "./featureMultiMarket";
const url = "https://api-us.exoticca.com/api/landing/v2/country/botswana";

export default function Home() {
  // Data for each card can be an array or fetched from an API
  const tripData = featuredMultiMarket;

  return (
    <div className="max-w-screen-xl mx-auto px-20">
      <h1 className="text-3xl font-bold text-center my-8">
        Our recommendation to visit Botswana and neighboring countries
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {tripData.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
}
