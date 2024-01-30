import CurrentWeather from "@/data/CurrentWeather";

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  precipitation: number[];
  wind_speed_10m: number[];
}

export default interface DetailWeather extends CurrentWeather {
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation: number[];
    wind_speed_10m: number[];
  };
}
