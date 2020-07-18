import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

import Header from "./Header";
import GoogleMaps from "./GoogleMaps";

const SearchBar = ({ googleKey, units, setUnits, search, invalid }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (event) => {
    setUnits(event.target.value);
  };

  const handleSearch = (event) => {
    doSearch();
  };

  const doSearch = () => {
    search(city);
  };

  return (
    <div>
      <Header />
      <Grid container spacing={2} alignItems="flex-end">
        <Grid>
          <GoogleMaps googleKey={googleKey} setCity={setCity} search={search}/>
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
    </div>
  );
};

export default SearchBar;
