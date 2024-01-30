import { currentApiUrl } from "@/data/apiUrl";
import coordinates from "@/data/coordinates.json";

const current_weather_params =
  "temperature_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m";
const hourly = "temperature_2m,precipitation,wind_speed_10m";
const past_days = 2;
const forecast_days = 3;

const enrichUrl = ({ lat, long }: { lat: number; long: number }) => {
  const url = new URL(currentApiUrl);
  url.searchParams.append("longitude", `${long}`);
  url.searchParams.append("latitude", `${lat}`);
  url.searchParams.append("current", `${current_weather_params}`);
  url.searchParams.append("past_days", `${past_days}`);
  url.searchParams.append("forecast_days", `${forecast_days}`);
  url.searchParams.append("hourly", `${hourly}`);

  return url;
};

const getCityWeather = async (city: string) => {
  const coords = coordinates.find(
    ({ city: cityName }) => cityName === decodeURIComponent(city)
  ) || { lat: 0, long: 0 };
  const url = enrichUrl(coords);
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (res.ok) return res.json();
  throw new Error("couldn't fetch data");
};

export default getCityWeather;
