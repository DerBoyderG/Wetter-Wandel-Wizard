import React from "react";

const Vorhersage = ({ conditions }) => {
  const weatherImg = [
    { id: "night", src: "/assets/night.svg" },
    { id: "rain", src: "/assets/Rain.svg" },
    { id: "sun", src: "/assets/sunny.svg" },
    { id: "thunderstorm", src: "/assets/thunderstorm.svg" },
    { id: "snow", src: "/assets/sunnywithrain.svg" },
    { id: "cloudy", src: "/assets/cloudy.svg" },
    { id: "partly-cloudy-day", src: "/assets/cloudy.svg" },
    { id: "partly-cloudy-night", src: "/assets/night.svg" },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Große Karte für den aktuellen Ort */}
        {conditions[0] && (
          <div className="bg-white rounded-lg p-4 shadow-md text-center mb-6">
            <h2 className="text-3xl font-semibold">{conditions[0].location}</h2>
            <p className="text-2xl font-bold mt-2">{conditions[0].temp}&#x2103;</p>
            <p className="text-lg">{conditions[0].date} - {conditions[0].weekday}</p>
          </div>
        )}

        {/* Kleinere Karten für Morgens, Mittags und Abends */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Morgens', 'Mittags', 'Abends'].map((time, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{time}</h3>
              {conditions[index + 1] && (
                <>
                  <img
                    src={weatherImg.find((item) => item.id === conditions[index + 1].icon)?.src}
                    alt={conditions[index + 1].icon}
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="text-xl font-bold mt-2">{conditions[index + 1].temp}&#x2103;</p>
                  <p className="text-lg">{conditions[index + 1].date} - {conditions[index + 1].weekday}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vorhersage;
