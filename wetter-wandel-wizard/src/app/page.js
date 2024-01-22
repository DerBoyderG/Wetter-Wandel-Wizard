"use client";
import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Suchleiste from './Components/Suchleiste';
import WeatherPage from './Components/Wetter/Wetter';
import StatsPage from './Components/Klimawandel/KlimaDiagramm';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [selectedLocation, setSelectedLocation] = useState("Köln");
  const [activeTab, setActiveTab] = useState("Heute");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function handleSearch(searchValue) {
    setSelectedLocation(searchValue);
  }
  
  function handleLocation(locationValue) {
    setSelectedLocation(locationValue);
  }

  return (
    <div>
      <Header
        currentTime={currentTime}
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main className="p-4">
        {activeTab === "Heute" && <><Suchleiste onSearch={handleSearch} onLocation={handleLocation} /> <div className="my-5"/> <WeatherPage location={selectedLocation} /></>}
        {activeTab === "Klimawandel" && <StatsPage/>}
      </main>
    </div>
  );
};
