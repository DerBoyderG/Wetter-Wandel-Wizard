"use client";

import React, { useState, useEffect } from 'react';
import Header from "./Components/Header";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    // Timer einrichten, um die aktuelle Uhrzeit jede Minute zu aktualisieren
    const timerId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 60000); // aktualisiert jede Minute

    // Aufräumfunktion, die den Timer löscht, wenn die Komponente unmountet wird
    return () => {
      clearInterval(timerId);
    };
  }, []); // Leeres Array bedeutet, dass dieser Effekt nur beim Mounten und Unmounten läuft

  const tabs = [
    { title: 'Heute', href: '#heute' },
    { title: 'Klimawandel', href: '#klimawandel' },
    { title: 'Nächsten Tage', href: '#naechsten-tage' },
  ];

  //variable die longitude und latitude speichert und zum testen ausgeben
  var showPosition = (position) => {
    alert("Latitude: " + position.coords.latitude +
      "\nLongitude: " + position.coords.longitude);
  }


  //methode um den standort zu bestimmen
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation wird nicht unterstützt");
    }
  }



  return (
    <div>
      <Header currentTime={currentTime} tabs={tabs} />
      <main className="p-4">
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getLocation}>Standort bestimmen</button>
        </div>
        </main>
    </div>
  );
};

  