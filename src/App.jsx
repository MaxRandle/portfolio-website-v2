import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import IntroPage from "./IntroPage";
import P5JS from "./P5JS";
import UTTT from "./UTTT";
import IssDockingAutopilot from "./IssDockingAutopilot";

function App() {
  return (
    <Router>
      <Route path="/" exact component={() => <IntroPage />} />
      <Route path="/p5js" component={() => <P5JS />} />
      <Route path="/uttt" component={() => <UTTT />} />
      <Route path="/iss" component={() => <IssDockingAutopilot />} />

      <Route path="/" component={() => <Redirect to="/" />} exact />
    </Router>
  );
}

export default App;
