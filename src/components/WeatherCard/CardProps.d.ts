import CurrentWeather from "@/data/CurrentWeather";

export default interface CardProps extends CurrentWeather {
  city: string;
  noHover?: boolean;
}
