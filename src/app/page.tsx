"use client";

import TripCard from "@/components/TripCard";
import { useGetData } from "../api/useGetData";
import TripCardSkeleton from "../components/SkeletonTripCard";
import { Skeleton } from "../components/ui/skeleton";
import { Trip } from "../api/featureMultiMarket";

export default function Home() {
  const { data, isError, isLoading } = useGetData();

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-20">
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

        {data?.cards.featuredMultiMarket.map((trip) => (
          <TripCard
            key={trip.id}
            trip={trip}
          />
        ))}
        {data?.cards.multiMarket && (
          <>
            <h1 className="text-2xl font-bold text-center my-8">
              Multi country vacation packages including {data.name}
            </h1>
            {data?.cards.multiMarket.map((trip) => (
              <>
                <TripCard
                  key={trip.id}
                  trip={trip}
                />
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
