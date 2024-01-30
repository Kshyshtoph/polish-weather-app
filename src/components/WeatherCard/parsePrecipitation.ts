import CardProps from "./CardProps";

export const parsePrecipitation = ({
  current: { precipitation, rain, showers, snowfall },
}: CardProps) => {
  if (precipitation === 0) return "bez opadów";
  if (rain === precipitation) return "deszcz";
  if (showers === precipitation) return "mżawka";
  if (snowfall === precipitation) return "śnieg";
  if (snowfall === 0) return "przelotne opady";
  return "deszcz ze śniegiem";
};
