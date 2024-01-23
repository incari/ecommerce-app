"use client";

import TripCard from "@/components/TripCard";
import { useGetData } from "../api/useGetData";
import TripCardSkeleton from "../components/SkeletonTripCard";
import { Skeleton } from "../components/ui/skeleton";
import { Trip } from "../api/featureMultiMarket";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, isError, isLoading } = useGetData();
  const [value, setValue] = useState("");
  const [filteredCards, setFilteredCards] = useState<any[] | null>(null);

  useEffect(() => {
    if (data) {
      let allTrips: Trip[] = [];

      // Assuming data.cards is an object with properties like featuredMultiMarket, etc.
      for (const key in data.cards) {
        if (Object.prototype.hasOwnProperty.call(data.cards, key)) {
          const tripArray = data.cards[key] as Trip[];
          allTrips = allTrips.concat(tripArray);
        }
      }

      const filtered = allTrips.filter((trip) =>
        trip.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCards(filtered);
    }
  }, [value, data]);
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header
        value={value}
        setValue={setValue}
      />
      <div className="max-w-screen-xl mx-auto px-2 md:px-20">
        {filteredCards?.length === 0 ? (
          <h1 className="text-2xl text-center my-8">
            There are not results for your search...
          </h1>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center my-8">
              {data ? (
                data.hero.shortDescription
              ) : (
                <Skeleton className="h-40 w-full" />
              )}
            </h1>
            <div className="grid grid-cols-1 gap-6">
              {(isLoading || !data) &&
                [...Array(4)].map((_, index) => (
                  <TripCardSkeleton key={"skeleton" + index} />
                ))}
              {(filteredCards || data?.cards.featuredMultiMarket)?.map(
                (trip) => (
                  <TripCard
                    key={trip.id}
                    trip={trip}
                    highlightText={value}
                  />
                )
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
