import { useEffect, useState } from "react";
import { useGetData } from "../api/useGetData";
import { Markets, DestinationsKeys } from "../api/responseTypes";

export const useFilteredData = () => {
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

  return {
    data,
    isError,
    isLoading,
    value,
    setValue,
    filteredCards
  };
};
