import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import IntroPage from "./Intro/IntroPage";

function App() {
  return (
    <Router>
      <Route path="/intro" component={() => <IntroPage />} />
      <Route path="/" component={() => <Redirect to="/intro" />} exact />
    </Router>
  );
}

export default App;
