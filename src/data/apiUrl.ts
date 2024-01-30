const cardData =
  "temperature_2m,apparent_temperature,precipitation,wind_speed_10m,rain,showers,snowfall";

const apiUrl = new URL("https://api.open-meteo.com/v1/forecast?");
apiUrl.searchParams.append("timezone", "Europe/Berlin");
export const dashboardApiUrl = new URL(apiUrl);
dashboardApiUrl.searchParams.append("current", cardData);
export default apiUrl;
