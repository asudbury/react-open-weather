import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ErrorMessages from "./ErrorMessages";
import City from "./City";
import Today from "./Today";
import Forecast from "./Forecast";
import WeatherService from "../WeatherService";

const Weather = ({ apiKey }) => {
  const [error401, setError401] = useState(false);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState(null);
  const [today, setToday] = useState(null);
  const [forecast, setForecast] = useState(null);

  const search = (citySearch) => {
    if (citySearch.length > 2) {
      const weatherService = new WeatherService(units, apiKey, "en");

      const params = { q: citySearch, units: units };

      let promise = weatherService.getForecast(params);

      promise.then((data) => {
        if (typeof data != "undefined") {
          setCity(data.city);
          setToday(data.today);
          setForecast(data.forecast);
        }
      });

      promise.catch((error) => {
        if (error.response.status === 401) {
          setError401(true);
        }

        setCity(null);
        setToday(null);
        setForecast(null);
      });
    }
  };

  return (
    <div>
      <SearchBar units={units} setUnits={setUnits} search={search}></SearchBar>

      {error401 && <ErrorMessages />}

      {city && <City city={city} />}

      {today && <Today today={today} />}

      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default Weather;
