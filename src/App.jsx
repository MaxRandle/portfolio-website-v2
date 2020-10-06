import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import IntroPage from "./IntroPage";
import P5JS from "./P5JS";
import UTTT from "./UTTT";
function App() {
  return (
    <Router>
      <Route path="/intro" component={() => <IntroPage />} />
      <Route path="/p5js" component={() => <P5JS />} />
      <Route path="/uttt" component={() => <UTTT />} />

      <Route path="/" component={() => <Redirect to="/intro" />} exact />
    </Router>
  );
}

export default App;
