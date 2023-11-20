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
  ];

  return (
    <div>
      <Header currentTime={currentTime} tabs={tabs} />
      {/* Rest der Komponenten */}
    </div>
  );
};

  