"use client";

import TripCard from "@/components/TripCard";
import { useGetData } from "../api/useGetData";
import TripCardSkeleton from "../components/SkeletonTripCard";
import { Skeleton } from "../components/ui/skeleton";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { DestinationsKeys, Markets } from "../api/responseTypes";

export default function Home() {
  const { data, isError, isLoading } = useGetData();
  const [value, setValue] = useState("");
  const [filteredCards, setFilteredCards] = useState<any[] | null>(null);

  useEffect(() => {
    if (data) {
      let allTrips: Markets[] = [];

      for (const key in data.destinations) {
        const newKey = key as DestinationsKeys;
        if (Object.prototype.hasOwnProperty.call(data.destinations, key)) {
          // Use direct property access instead of key
          const tripArray = data.destinations[newKey];
          allTrips = allTrips.concat(tripArray);
        }
      }

      const searchValueLower = value.toLowerCase();

      const filtered = allTrips.filter((trip) => {
        const titleMatch = trip.title.toLowerCase().includes(searchValueLower);
        const destinationMatch = trip.destination
          .toLowerCase()
          .includes(searchValueLower);
        const highlightsMatch = trip.highlights.some((highlight) =>
          highlight.title.toLowerCase().includes(searchValueLower)
        );
        const includesMatch = trip.includes.some((include) =>
          include.toLowerCase().includes(searchValueLower)
        );
        const tagsMatch = trip.tags.some((tag) =>
          tag.name.toLowerCase().includes(searchValueLower)
        );
        const priceMatch = trip.priceDetail.fromPriceBeautify
          .replace(/[$,]/g, "")
          .includes(value);

        return (
          titleMatch ||
          destinationMatch ||
          highlightsMatch ||
          includesMatch ||
          tagsMatch ||
          priceMatch
        );
      });

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
              {(filteredCards || data?.destinations.featuredMultiMarket)?.map(
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
