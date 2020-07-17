import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Today = ({ today }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Today</Typography>
        <img src={today.icon} alt="weather icon"></img>
        <Typography variant="h2">
          {today.temperature.current}°{today.unitIndicator}
        </Typography>
        <Typography variant="h4">{today.description}</Typography>
        <Typography variant="h6">
          Sunrise {today.sunrise} Sunset {today.sunset}
        </Typography>
        <Typography variant="h6">
          Min {today.temperature.min}°{today.unitIndicator} Max{" "}
          {today.temperature.max}°{today.unitIndicator}
        </Typography>
        <Typography variant="h6">Wind {today.wind} km/h</Typography>
        <Typography variant="h6">Humidity {today.humidity}%</Typography>
      </CardContent>
    </Card>
  );
};

export default Today;
