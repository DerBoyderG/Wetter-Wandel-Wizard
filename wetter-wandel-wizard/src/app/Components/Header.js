import React, { useState } from 'react';

const Header = ({ currentTime, activeTab, setActiveTab }) => { 
  return (
    <header className="bg-bg text-white p-4 flex justify-between items-center">
      <div className="stack">
        <div className="text-xl font-bold">WetterWandelWizard</div>
        <div className="text-lg">{currentTime}</div>
      </div>
      <nav className="mt-4 flex">
        <a
          className={`text-white px-4 py-2 rounded transition duration-300 ease-in-out ${
            activeTab === 'Heute' ? 'border-b-2 border-black font-bold' : 'hover:bg-blue-700'
          }`}
          onClick={() => setActiveTab('Heute')} 
        >
          Heute
        </a>
        <a
          className={`text-white px-4 py-2 rounded transition duration-300 ease-in-out ${
            activeTab === 'Klimawandel' ? 'border-b-2 border-black font-bold' : 'hover:bg-blue-700'
          }`}
          onClick={() => setActiveTab('Klimawandel')} 
        >
          Klimawandel
        </a>
      </nav>
    </header>
  );
};

export default Header;
