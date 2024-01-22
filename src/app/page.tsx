"use client";

import TripCard from "@/components/TripCard";
import { FeaturedMultiMarket } from "@/api/featureMultiMarket";
import useSWR from "swr";
import { promises as fs } from "fs";
import { featuredMultiMarket } from "./featureMultiMarket";

export default function Home() {
  const fetcher = (url: string) =>
    fetch(url, {
      mode: "no-cors",
    }).then(() => featuredMultiMarket);

  const { data: tripData, isLoading } = useSWR(
    "https://api-us.exoticca.com/api/landing/v2/country/botswana",
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-screen-xl mx-auto px-20">
      <h1 className="text-3xl font-bold text-center my-8">
        Our recommendation to visit Botswana and neighboring countries
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {tripData.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
