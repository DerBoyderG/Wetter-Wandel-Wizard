"use client";
import React, { useEffect, useState } from "react";
import { getWeather, getWeatherForThreeDays } from "../Stores/WetterStore";
import Vorhersage from "./VorhersageHeute";
import VorhersageTage from "./VorhersageTage";

const WetterSeite = ({ location }) => {
  const [weatherData, setWeatherData] = useState({
    city: "Köln",
    temp: "",
    weather: "night",
    conDaily: [],
    con: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentWeather = await getWeather(location);
        console.log(currentWeather);
        const { resolvedAddress, currentConditions } = currentWeather;

        const conn = [];
if (currentWeather?.days[0]?.hours) {
  conn.push({ time: "Morgens", temp: currentWeather.days[0].hours[8].temp, icon: currentWeather.days[0].hours[8].icon });
  conn.push({ time: "Mittags", temp: currentWeather.days[0].hours[12].temp, icon: currentWeather.days[0].hours[12].icon });
  conn.push({ time: "Abends", temp: currentWeather.days[0].hours[16].temp, icon: currentWeather.days[0].hours[16].icon });
}

        const forecastData = await getWeatherForThreeDays(location);
        const days = ["Heute", "Morgen", "Übermorgen"];
        const conDaily = forecastData.days.map((item, index) => ({
          day: days[index],
          tempmin: item.tempmin,
          tempmax: item.tempmax,
          icon: item.icon,
          description: item.conditions,
        }));

        setWeatherData({
          city: resolvedAddress,
          temp: currentConditions.temp,
          weather: currentConditions.icon,
          conDaily,
          con: conn,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData({ city: "Error", temp: "", weather: "night", conDaily: [], con: [] });
      }
    };

    fetchData();
  }, [location]);

  const weatherImg = {
    night: "/assets/night.svg",
    rain: "/assets/Rain.svg",
    sun: "/assets/sunny.svg",
    thunderstorm: "/assets/thunderstorm.svg",
    snow: "/assets/sunnywithrain.svg",
    cloudy: "/assets/cloudy.svg",
    "partly-cloudy-day": "/assets/cloudy.svg",
    "partly-cloudy-night": "/assets/night.svg",
  };

  const { city, temp, weather, conDaily, con } = weatherData;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className="grid grid-rows-3 h-fit w-fit gap-4">
        <div className="grid grid-row w-fit h-fit">
          <div className="grid grid-cols-2 md:grid-rows-1 h-fit gap-5 border-2 border-border rounded-xl">
            <div className="grid grid-col-1 md:grid-row-1 h-fit w-fit gap-4">
              <p className=" text-lg  h-fit font-bold w-fill text-white">{city}</p>
              <div className="rounded-lg h-8 w-35 h-fit justify-items-center bg-bg text-white" >
                <p style={{ marginLeft: "0.25rem" }} className="font-bold w-auto text-lg">
                  Momentan: {temp}&#x2103;
                </p>
              </div>
            </div>
            <div className="grid grid-col-2 md:grid-row-2 h-auto w-32 md:w-52 lg:w-64">
              <img src={weatherImg[weather]} alt="Avatar" className="rounded-full h-auto w-auto" />
            </div>
          </div>
        </div>
        <div className="grid grid-row-2 h-auto w-full rounded">
          <Vorhersage conditions={con} />
        </div>

        <div className="grid grid-row-2 h-auto w-full rounded">
          <VorhersageTage conditions={conDaily} />
        </div>
      </div>
    </div>
  );
  
};

export default WetterSeite;



