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
      <div className="max-w-screen-xl mx-auto px-4 border-2 border-border rounded-xl border-spacing-5">
        <h2 className="text-2xl font-semibold mb-4 text-white">Vorhersage für den Tag</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Morgens', 'Mittags', 'Abends'].map((time, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{time}</h3>
              {conditions[index] && (
                <>
                  <img
                    src={weatherImg.find((item) => item.id === conditions[index].icon)?.src}
                    alt={conditions[index].icon}
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="text-xl font-bold mt-2">{conditions[index].temp}&#x2103;</p>
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
