import axios from "axios";
import { map } from "./Mapper";

class WeatherService {
  constructor(unit, apiKey, lang) {
    this.unit = unit;
    this.apiKey = apiKey;
    this.baseApiUrl = "//api.openweathermap.org/data/2.5";
    this.lang = lang;
  }
  getForecast(args) {
    const endpointForecast = this.baseApiUrl + "/forecast";
    const endPointToday = this.baseApiUrl + "/weather";
    const params = Object.assign(
      {
        appid: this.apiKey,
        lang: this.lang,
        unit: this.unit,
      },
      args
    );

    const promise = axios
      .all([
        axios.get(endpointForecast, { params }),
        axios.get(endPointToday, { params }),
      ])
      .then(
        axios.spread((forecastReponse, todayReponse) => {
          const forecastData = forecastReponse.data;
          const todayData = todayReponse.data;

          if (forecastData && todayData) {
            return map(forecastData, todayData, this.unit);
          }
          return {};
        })
      );

    return promise;
  }

  getNextDays(tomorrow) {
    // Returns an array containing the next 4 days dates in format yyyy-mm-dd

    var fourDates = [];
    //var tomorrow = new Date(); // initialized at today
    var tomorrow_formated = "";

    // Creating the 4 dates in the good format
    for (var i = 0; i < 4; i++) {
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow_formated =
        tomorrow.getFullYear() +
        "-" +
        ("0" + tomorrow.getMonth() + 1).slice(-2) +
        "-" +
        ("0" + tomorrow.getDate()).slice(-2);
      fourDates.push(tomorrow_formated);
    }

    return fourDates;
  }

  mapForecast(daysData) {
    var daysMapped = [];

    /*var comingDays = this.getNextDays(new Date());

    // Getting data from each day
    for (var i=0; i<4; i++) {

      var dayDataFiltered = daysData.filter(item => item.dt_txt.includes(comingDays[i]));  //7 or 8 data objects represnting a day
      var dayMapped = {};

      ////dayMapped.dayOfWeek = this.getDayOfWeek(dayDataFiltered[0].dt );  

      dayMapped.temperature = {};
      dayMapped.temperature.min = Math.min.apply(Math, dayDataFiltered.map(function(el) { return el.main.temp_min;})).toFixed(0);
      dayMapped.temperature.max = Math.max.apply(Math, dayDataFiltered.map(function(el) { return el.main.temp_max;})).toFixed(0);
      
      // Taking the middle of the day as reference
      ///dayMapped.description = dayDataFiltered[dayDataFiltered.length/2].weather[0].description;
      ///dayMapped.icon = this.getIcon(dayDataFiltered[dayDataFiltered.length/2].weather[0].icon);

      daysMapped.push(dayMapped);
    }*/

    return daysMapped;
  }
}

export default WeatherService;
