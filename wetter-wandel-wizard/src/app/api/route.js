export async function GET(_req, _params) {
    return new Response(JSON.stringify({
            "queryCost": 1,
            "latitude": 50.9417,
            "longitude": 6.95517,
            "resolvedAddress": "Köln, Nordrhein-Westfalen, Deutschland",
            "address": "Köln",
            "timezone": "Europe/Berlin",
            "tzoffset": 1,
            "days": [
             {
              "datetime": "2023-10-30",
              "datetimeEpoch": 1698620400,
              "tempmax": 15,
              "tempmin": 11,
              "temp": 12.9,
              "feelslikemax": 15,
              "feelslikemin": 11,
              "feelslike": 12.9,
              "dew": 10.1,
              "humidity": 83.6,
              "precip": 11.4,
              "precipprob": 100,
              "precipcover": 54.17,
              "preciptype": [
               "rain"
              ],
              "snow": 0,
              "snowdepth": 0,
              "windgust": 30.6,
              "windspeed": 24.1,
              "winddir": 153.2,
              "pressure": 999.5,
              "cloudcover": 90,
              "visibility": 13.1,
              "solarradiation": 33.9,
              "solarenergy": 2.8,
              "uvindex": 2,
              "severerisk": 10,
              "sunrise": "07:20:08",
              "sunriseEpoch": 1698646808,
              "sunset": "17:10:50",
              "sunsetEpoch": 1698682250,
              "moonphase": 0.55,
              "conditions": "Rain, Partially cloudy",
              "description": "Partly cloudy throughout the day with rain.",
              "icon": "rain",
              "stations": [
               "02968",
               "00603",
               "03540",
               "05717",
               "EDDK",
               "01327",
               "remote",
               "E0822",
               "02667"
              ],
              "source": "comb"
             }
            ],
            "stations": {
             "02968": {
              "distance": 5540,
              "latitude": 50.989,
              "longitude": 6.978,
              "useCount": 0,
              "id": "02968",
              "name": "Köln-Stammheim",
              "quality": 100,
              "contribution": 0
             },
             "00603": {
              "distance": 29468,
              "latitude": 50.729,
              "longitude": 7.205,
              "useCount": 0,
              "id": "00603",
              "name": "Königswinter-Heiderhof",
              "quality": 100,
              "contribution": 0
             },
             "03540": {
              "distance": 31201,
              "latitude": 50.845,
              "longitude": 7.372,
              "useCount": 0,
              "id": "03540",
              "name": "Neunkirchen-Seelscheid-Krawinkel",
              "quality": 99,
              "contribution": 0
             },
             "05717": {
              "distance": 33300,
              "latitude": 51.226,
              "longitude": 7.105,
              "useCount": 0,
              "id": "05717",
              "name": "Wuppertal-Buchenhofen",
              "quality": 100,
              "contribution": 0
             },
             "EDDK": {
              "distance": 17063,
              "latitude": 50.87,
              "longitude": 7.17,
              "useCount": 0,
              "id": "EDDK",
              "name": "EDDK",
              "quality": 50,
              "contribution": 0
             },
             "01327": {
              "distance": 28080,
              "latitude": 50.712,
              "longitude": 6.791,
              "useCount": 0,
              "id": "01327",
              "name": "Weilerswist-Lommersum",
              "quality": 100,
              "contribution": 0
             },
             "E0822": {
              "distance": 10990,
              "latitude": 50.955,
              "longitude": 7.111,
              "useCount": 0,
              "id": "E0822",
              "name": "EW0822 Cologne DE",
              "quality": 0,
              "contribution": 0
             },
             "02667": {
              "distance": 16596,
              "latitude": 50.865,
              "longitude": 7.158,
              "useCount": 0,
              "id": "02667",
              "name": "Köln-Bonn",
              "quality": 100,
              "contribution": 0
             }
           }
    }));
}

    