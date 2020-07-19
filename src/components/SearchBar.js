import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Header from "./Header";
import GoogleMaps from "./GoogleMaps";

const SearchBar = ({
  googleKey,
  units,
  setUnits,
  citySearch,
  coordinatesSearch,
  invalid,
}) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (event) => {
    setUnits(event.target.value);
  };

  const handleSearch = (event) => {
    doSearch();
  };

  const doSearch = () => {
    citySearch(city);
  };

  return (
    <Card>
      <CardContent>
        <Header />
        <Grid container spacing={2}>
          <Grid>
            <GoogleMaps
              googleKey={googleKey}
              setCity={setCity}
              citySearch={citySearch}
            />
            <Button
              variant="outlined"
              style={{ background: "transparent" }}
              onClick={coordinatesSearch}
            >
              Use my current location
            </Button>
          </Grid>
          <Grid item>
            <TextField select value={units} onChange={handleUnitsChange}>
              <MenuItem key="metric" value="metric">
                Celsius
              </MenuItem>
              <MenuItem key="imperial" value="imperial">
                Farenheit
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <IconButton aria-label="search" onClick={handleSearch}>
              <SearchIcon color="primary" fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
