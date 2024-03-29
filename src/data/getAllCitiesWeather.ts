import { CitiesData } from "./CitiesData";
import { dashboardApiUrl } from "./apiUrl";
import coordinates from "./cities.json";

const url = new URL(dashboardApiUrl);

url.searchParams.append(
  "latitude",
  (coordinates as CitiesData[]).map(({ lat }) => lat).join()
);
url.searchParams.append(
  "longitude",
  (coordinates as CitiesData[]).map(({ long }) => long).join()
);

const getAllCitiesWeather = async () => {
  const res = await fetch(url, { next: { revalidate: 300 } });
  const json = await res.json();
  if (!res.ok) throw new Error("couldn't fetch data");
  return json;
};

export default getAllCitiesWeather;
