import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Forecast = ({ forecast }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Forecasr</Typography>
      </CardContent>
    </Card>
  );
};

export default Forecast;
