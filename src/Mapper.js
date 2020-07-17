import {
  utilsGetIcon,
  utilsGetFormattedTime,
  utilsCapitalizeFirstLetter,
  utilsGetUnitsIndicator,
} from "./Utils";

export function map(forecastData, todayData, unit) {
  const mapped = {};

  mapped.city = forecastData.city;
  mapped.city.googleUrl =
    "https://www.google.co.uk/maps/place/" + forecastData.city.name;
  mapped.city.wikiUrl =
    "https://en.wikipedia.org/wiki/" + forecastData.city.name;
  mapped.today = {
    description: utilsCapitalizeFirstLetter(todayData.weather[0].description),
    icon: utilsGetIcon(todayData.weather[0].icon),
    temperature: {
      min: todayData.main.temp_min.toFixed(0),
      max: todayData.main.temp_max.toFixed(0),
      current: todayData.main.temp.toFixed(0),
    },
    wind: todayData.wind.speed.toFixed(0),
    humidity: todayData.main.humidity,
    sunrise: utilsGetFormattedTime(todayData.sys.sunrise),
    sunset: utilsGetFormattedTime(todayData.sys.sunset),
    unitIndicator: utilsGetUnitsIndicator(unit),
    unit: unit,
  };

  mapped.forecasts = forecastData.list;

  return mapped;
}
