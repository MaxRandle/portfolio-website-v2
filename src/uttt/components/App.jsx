import React from "react";
import Board from "./Board";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import GameStateContextProvider from "../contexts/GameStateContext";
import SizeContextProvider from "../contexts/SizeContext";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#263690",
    },
  },
  spacing: 4,
  tile: {
    small: {
      size: "calc(11.111vmin - 6.223px)",
      // size: 40
    },
    large: {
      size: "calc(33.333vmin - 10.667px)",
    },
  },
  tilePadding: {},
});

function App(props) {
  const { ...otherProps } = props;

  return (
    <GameStateContextProvider>
      <SizeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <ControlBar className={classes.spacer} /> */}
          <Board {...otherProps} />
        </ThemeProvider>
      </SizeContextProvider>
    </GameStateContextProvider>
  );
}

export default App;
