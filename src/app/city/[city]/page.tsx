import DetailWeather from "./HourlyWeather";
import getCityWeather from "./getCityWeather";
import WeatherChart from "./WeatherChart";
import WeatherCard from "@/components/WeatherCard";

export default async function City({
  params: { city },
}: {
  params: { city: string };
}) {
  const cityWeather = (await getCityWeather(city)) as DetailWeather;
  const { hourly, current } = cityWeather;

  return (
    <>
      <main className="container mx-auto">
        <header className="p-4 lg:px-8 lg:py-4  lg:top-0 lg:z-20  ">
          <h1 className="text-2xl font-semibold py-3">Pogoda w Polsce</h1>
          <h2>{decodeURIComponent(city)} </h2>
        </header>
        <div className="grid grid-cols-2 gap-10 py-10 ">
          <WeatherCard
            {...{ current, city: decodeURIComponent(city), noHover: true }}
          />
          <WeatherChart {...{ ...hourly }} />
        </div>
      </main>
    </>
  );
}
