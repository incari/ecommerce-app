"use client";

import TripCard from "@/components/TripCard";
import { useGetData } from "../api/useGetData";
import TripCardSkeleton from "../components/SkeletonTripCard";
import { Skeleton } from "../components/ui/skeleton";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { DestinationsKeys, Markets } from "../api/responseTypes";
import { useFilteredData } from "./useFilteredData";

export default function Home() {
  const { data, isError, isLoading, value, setValue, filteredCards } =
    useFilteredData();

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
                <Skeleton className="h-20 w-full" />
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
