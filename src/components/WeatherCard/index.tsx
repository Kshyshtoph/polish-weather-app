"use client";

import symbols from "../../../public/symbols";
import Image from "next/image";
import CardProps from "./CardProps";
import useFreshData from "./useFreshData";
import { parsePrecipitation } from "./parsePrecipitation";
import Link from "next/link";

function WeatherCard(props: CardProps) {
  const precipitation_type = parsePrecipitation(props);
  const data = useFreshData(props);
  const {
    city,
    noHover,
    current: { temperature_2m, apparent_temperature, wind_speed_10m, is_day },
  } = !!data.current ? data : props;

  return (
    <Link className="col-span-2" href={`/city/${encodeURIComponent(city)}`}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 border-slate-50 mt-2 rounded-xl border-2 ${
          !noHover && "hover:bg-violet-300"
        }`}
      >
        <header className="col-span-5 font-semibold text-lg">
          <h2>{city}</h2>
        </header>
        <div className="row-span-3 place-items-center grid col-span-2">
          <Image
            src={symbols[is_day ? "day" : "night"][precipitation_type]}
            width={40}
            alt={precipitation_type}
            placeholder="blur"
          />
        </div>
        <div className="col-span-3">Temperatura: {temperature_2m}&deg;C</div>
        <div className="col-span-2">
          Odczuwalne: {apparent_temperature}&deg;C
        </div>
        <div className="col-span-3">Prędkość wiatru: {wind_speed_10m}km/h</div>
        <div className="col-span-2">{precipitation_type}</div>
      </div>
    </Link>
  );
}

export default WeatherCard;
