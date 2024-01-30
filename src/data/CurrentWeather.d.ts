export default interface CurrentWeather {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    is_day: number;
  };
  [k: string]: any;
}
