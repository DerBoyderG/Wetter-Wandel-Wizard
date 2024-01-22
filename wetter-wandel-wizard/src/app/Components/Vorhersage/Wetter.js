"use client";
import React, { useEffect, useState } from "react";
import { getWeather, getWeatherForThreeDays } from "../Stores/WetterStore";
import Vorhersage from "./Vorhersage";


const getWeatherForThree = async (location) => {
    const data = await getWeatherForThreeDays(location);
    return data;
}

const condition = [
    {day: "Heute", tempmin: "15", tempmax: "23", icon: "sun", description: "Sonnig"},
    {day: "Morgen", tempmin: "16", tempmax: "22", icon: "rain", description: "Sonnig mit Regen"},
    {day: "Übermorgen", tempmin: "17",tempmax: "25", icon: "thunderstorm", description: "Gewitter"},
];

const conditionsDaily = [
    {time: "Morgens", temp: "15",  icon: "sun"},
    {time: "Mittags", temp: "16",  icon: "rain"},
    {time: "Abends", temp: "17", icon: "thunderstorm"},
];

    const WetterSeite = ({ location }) => {
    const weatherImg = [
        {id: "night", src: "/assets/night.svg"},
        {id: "rain", src: "/assets/Rain.svg"},
        {id: "sun", src: "/assets/sunny.svg"},
        {id: "thunderstorm", src: "/assets/thunderstorm.svg"},
        {id: "snow", src: "/assets/sunnywithrain.svg"},
        {id: "cloudy", src: "/assets/cloudy.svg"},
        {id: "partly-cloudy-day", src: "/assets/cloudy.svg"},
        {id: "partly-cloudy-night", src: "/assets/night.svg"},
    ];
    const [weather, setWeather] = useState("night");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [conDaily, setConDaily] = useState(condition);
    const [con, setCon] = useState(conditionsDaily);
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch current weather data
            const currentWeather = await getWeather(location);
            setCity(currentWeather.resolvedAddress);
            setTemp(currentWeather.currentConditions.temp);
            setWeather(currentWeather.currentConditions.icon); 

            console.log(currentWeather);
            // Fetch data for hourly forecast
            const conn = []
            //add currentweather.days[0].hours[8].temp
            conn.push({time: "Morgens", temp: currentWeather.days[0].hours[8].temp, icon: currentWeather.days[0].hours[8].icon});
            conn.push({time: "Mittags", temp: currentWeather.days[0].hours[12].temp, icon: currentWeather.days[0].hours[12].icon});
            conn.push({time: "Abends", temp: currentWeather.days[0].hours[16].temp, icon: currentWeather.days[0].hours[16].icon});

            setCon(conn);

            // Fetch three-day forecast data
            const forecastData = await getWeatherForThree(location);
            const days = ["Heute", "Morgen", "Übermorgen"];
            setConDaily((prevConDaily) =>
              forecastData.days.map((item, index) => ({
                day: days[index],
                tempmin: item.tempmin,
                tempmax: item.tempmax,
                icon: item.icon,
                description: item.conditions,
              }))
            );
          } catch (error) {
            console.error("Error fetching weather data:", error);
            setCity("Error");
          }
        };
    
        fetchData();
      }, [location]);

    return (
        <>
            <div className="grid grid-rows-3 h-fit w-fit gap-4" >
                <div className="grid grid-row w-fit h-fit">
                        <div className="grid grid-cols-2 md:grid-rows-1 h-fit gap-5" >
                            <div className="grid grid-col-1 md:grid-row-1 h-fit w-fit gap-4">
                                <h1 className="text-xl h-fit font-bold w-32 lg:56">Mein Standort</h1>
                                <p className="h-fit font-bold w-fill">{ city }</p>
                                <div className="rounded-lg h-8 w-20 h-fit justify-items-center" style={{ backgroundColor: "#282828"}}>
                                    <p style={{marginLeft: "0.25rem"}} className="font-bold w-auto">{ temp }&#x2103;</p>
                                </div>
                            </div>
                            <div className="grid grid-col-2 md:grid-row-2 h-auto w-32 md:w-52 lg:w-64">
                                <img src={`${weatherImg.find(weather => weather.id === weather ? weather : "night")?.src}`} alt="Avatar" className="rounded-full h-auto w-auto" />
                            </div>
                        </div>
                </div>
                <div className="grid grid-row-2 h-auto w-full rounded">
                    <Vorhersage conditions={con}/>
                </div>

            </div>
        </>
    );
};

export default WetterSeite; 
