"use client";

import Chart from "react-google-charts";
import { HourlyWeather } from "./HourlyWeather";
import { isNow, parseTime } from "./timeUtils";

function WeatherChart(hourlyData: HourlyWeather) {
  const data = hourlyData.time.map((time, index) => {
    const dateTime = new Date(time);
    const parsdedTime = parseTime(dateTime);

    return [
      parsdedTime,
      isNow(dateTime) ? "teraz" : null,
      hourlyData.temperature_2m[index],
      hourlyData.precipitation[index],
      hourlyData.wind_speed_10m[index],
    ];
  });
  return (
    <div className="border-slate-80 overflow-hidden rounded-xl border-2 col-span-2">
      <Chart
        chartType="LineChart"
        data={[
          [
            "czas",
            { role: "annotation", type: "string" },
            "temperatura °C",
            "opady mm/h",
            "prędkość wiatru km/h",
          ],
          ...data,
        ]}
        width="100%"
        height="400px"
        legendToggle
        options={{
          annotations: {
            stem: {
              color: "#097138",
              height: 300,
            },
            style: "line",
          },
          legend: "top",
        }}
      />
    </div>
  );
}

export default WeatherChart;
