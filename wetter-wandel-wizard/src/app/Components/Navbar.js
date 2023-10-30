import React from 'react';

// Navbar-Komponente
function Navbar() {
  return (
    // Hauptcontainer der Navbar
    <div className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto">
        
        
        {/* Logo der Webseite */}
        <div className="flex items-center justify-between">
            <img src="/favicon.svg" alt="logo" width={50} height={50} />


          {/* Navigationslinks*/}
          <div className="space-x-4">
            <a href="#" className="text-white hover:underline font-bold text-lg	">Home</a>
            <a href="#" className="text-white hover:underline font-bold text-lg	">---</a>
            <a href="#" className="text-white hover:underline font-bold text-lg	">---</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportieren der Navbar-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Navbar;