// Basics
import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";

import "animate.css/animate.css";
import "flag-icon-css/css/flag-icon.css";
import "./index.scss";

// Components
import App from "./App";

// Material UI setup
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

// Get material-ui theme & customize it
const customTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

// render react-app
ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
