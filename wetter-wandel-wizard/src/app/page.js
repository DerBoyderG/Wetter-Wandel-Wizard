"use client";

import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Suchleiste from './Components/Suchleiste';
import WeatherPage from './Components/Vorhersage/Wetter';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [selectedLocation, setSelectedLocation] = useState("Köln"); // Startwert

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
    // Hier können Sie die Logik für die Suche implementieren
    console.log(`Suche nach: ${searchValue}`);
    // Hier aktualisieren Sie die ausgewählte Location
    setSelectedLocation(searchValue);
  }
  
  function handleLocation(locationValue) {
    // Hier können Sie die Logik für die Standortauswahl implementieren
    console.log(`Standort ausgewählt: ${locationValue}`);
    // Hier aktualisieren Sie die ausgewählte Location
    setSelectedLocation(locationValue);
  }

  return (
    <div>
      <Header currentTime={currentTime} />
      <Suchleiste onSearch={handleSearch} onLocation={handleLocation} />
      <main className="p-4">
        <WeatherPage location={selectedLocation} /> {/* Verwenden Sie die ausgewählte Location */}
      </main>
    </div>
  );
};
