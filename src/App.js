import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Weather from "./components/Weather";

import Theme from "./Theme.js";

import "./App.css";

const App = () => (
  <ThemeProvider theme={Theme}>
    <Container className="container">
      <Weather apiKey={"5ce07d841919bc82dcccf2f3c310c2eb"} />
    </Container>
  </ThemeProvider>
);

export default App;
