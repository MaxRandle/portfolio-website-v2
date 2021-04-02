import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import IntroPage from "./IntroPage";
import P5JS from "./P5JS";
import UTTT from "./UTTT";
import IssDockingAutopilot from "./IssDockingAutopilot";
import BackArrow from "./BackArrow";
import SmolUrl from "./SmolUrl";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        component={() => (
          <>
            <IntroPage />
          </>
        )}
      />

      <Route
        path="/p5js"
        component={() => (
          <>
            <BackArrow />
            <P5JS />
          </>
        )}
      />

      <Route
        path="/uttt"
        component={() => (
          <>
            <BackArrow />
            <UTTT />
          </>
        )}
      />

      <Route
        path="/iss"
        component={() => (
          <>
            <BackArrow />
            <IssDockingAutopilot />
          </>
        )}
      />

      <Route
        path="/smolurl"
        component={() => (
          <>
            <BackArrow />
            <SmolUrl />
          </>
        )}
      />

      <Route path="/" component={() => <Redirect to="/" />} exact />
    </Router>
  );
}

export default App;
