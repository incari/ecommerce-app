"use client";

import TripCard from "@/components/TripCard";
import { FeaturedMultiMarket } from "@/api/featureMultiMarket";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  // Data for each card can be an array or fetched from an API
  // const tripData: FeaturedMultiMarket = featuredMultiMarket;
  const { data, error } = useSWR("/api/staticData", fetcher);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-20">
      <h1 className="text-3xl font-bold text-center my-8">
        Our recommendation to visit Botswana and neighboring countries
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {/*     {tripData.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))} */}
      </div>
    </div>
  );
}
