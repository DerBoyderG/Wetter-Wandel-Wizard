import React from 'react';

const Header = ({ currentTime, tabs }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-800 text-white">
      <div className="text-xl font-bold">
        WetterWandelWizard
      </div>
      <div className="text-lg">
        {currentTime}
      </div>
      <nav>
        {tabs.map((tab, index) => (
          <a key={index} href={tab.href} className="text-white px-4 py-2 hover:bg-blue-700 rounded transition duration-300 ease-in-out">
            {tab.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;