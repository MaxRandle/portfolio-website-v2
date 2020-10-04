import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.scss";

import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: amber[800],
    },
  },
  typography: {
    h1: {
      lineHeight: "75px",
    },
    h3: {
      lineHeight: "40px",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
