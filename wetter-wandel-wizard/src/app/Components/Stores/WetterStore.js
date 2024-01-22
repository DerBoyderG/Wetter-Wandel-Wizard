export async function getWeather(city) {
    const apiKey = "6FFKM4QE7AFGFEG7A4VBSNUTP";
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${apiKey}&contentType=json`);
      
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching:", error);
      return error;
    }
  }
  
  export async function getWeatherForThreeDays(city) {
    const apiKey = "6FFKM4QE7AFGFEG7A4VBSNUTP";
    const todaysDate = new Date().toISOString().slice(0, 10);
    const dateinThreeDays = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${todaysDate}/${dateinThreeDays}?unitGroup=metric&key=${apiKey}&contentType=json`);
      
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching:", error);
      return error;
    }
  }
  