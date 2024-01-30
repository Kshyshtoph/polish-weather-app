import WeatherCard from "@/components/WeatherCard/";
import coordinates from "@/data/cities.json";
import CardProps from "@/components/WeatherCard/CardProps";
import getAllCitiesWeather from "@/data/getAllCitiesWeather";

export default async function Home() {
  const citiesWeather = (await getAllCitiesWeather()) as CardProps[];

  const citiesComponents = citiesWeather.map((e, index) => {
    const city = coordinates[index].city;

    return <WeatherCard key={city} {...{ ...e, city }} />;
  });

  return (
    <main className="container mx-auto">
      <header className="p-4 lg:px-8 lg:py-4 lg:top-0 lg:z-20 flex justify-between ">
        <h1 className="text-2xl font-semibold py-3">Pogoda w Polsce</h1>
      </header>

      <div className="grid grid-cols-4 gap-10 min-h-screen">
        {citiesComponents}
      </div>
    </main>
  );
}
