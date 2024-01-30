import { useEffect, useState } from "react";
import coordinates from "@/data/coordinates.json";
import CardProps from "./CardProps";
import currentApiUrl from "@/data/apiUrl";

const refreshData = async (city: string): Promise<CardProps> => {
  const { lat, long } = coordinates.find((e) => e.city === city) || {
    lat: 0,
    long: 0,
  };
  const url = new URL(currentApiUrl);
  url.searchParams.append("latitude", `${lat}`);
  url.searchParams.append("longitude", `${long}`);
  const response = await fetch(url, { next: { revalidate: 300 } });
  if (response.ok) return response.json();
  throw "couldn't refresh!";
};

export default function useFreshData(data: CardProps) {
  const [state, setState] = useState(data);
  useEffect(() => {
    setInterval(() => {
      const { city } = data;
      refreshData(city).then((res) => setState({ ...res, city }));
    }, 600000);
  }, [data]);
  return state;
}
