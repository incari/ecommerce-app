import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { response } from "../api/response";
import { Trip } from "./featureMultiMarket";

// const url = "https://api-us.exoticca.com/api/landing/v2/country/botswana";

const getCards = async () => {
  // Simulating a delay with setTimeout
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2000 milliseconds delay

  return axios("")
    .then(() => {
      // Should return the data
      return response;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      throw error;
    });
};

type CardProps = {
  featuredMultiMarket: Trip[] | [];
  featureMultimarket: Trip[] | [];
  monoMarket: Trip[] | [];
  multiMarket: Trip[] | [];
};

const useGetData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getCards,
    // Filter and select the data for the cards
    select: (data) => {
      if (data) {
        return {
          cards: { ...data.destinations },
          hero: { ...data.hero },
          name: data.name
        };
      }
    }
  });
};

export { useGetData };
