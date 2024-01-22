"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getFeatureMarket = async ({ queryKey }: { queryKey: string[] }) => {
  const [url] = queryKey;
  const { data } = await axios.get(url);
  return data;
};

export const useGetFeatureMarket = (url: string) => {
  const results = useQuery({
    queryKey: [url],
    queryFn: getFeatureMarket,
  });

  return results;
};
