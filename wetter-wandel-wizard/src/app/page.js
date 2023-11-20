"use client";

import React from "react";
import Header from "./Components/Header";

export default function Home() {

  const tabs = [
    { title: 'Heute', href: '#heute' },
    { title: 'Klimawandel', href: '#klimawandel' },
  ];

  const currentTime = '21:00 Uhr';


  return (
      <div>
        <Header currentTime={currentTime} tabs={tabs} />
        {/* Rest der Komponenten */}
      </div>
    );
  };
  