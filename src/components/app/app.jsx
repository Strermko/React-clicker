import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header/header";
import MainPage from "../mainPage/mainPage";
import AboutMe from "../aboutMe/aboutMe";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/React-clicker" exact component={MainPage} />
        <Route path="/React-clicker/about-me" component={AboutMe} />
      </div>
    </Router>
  );
}

export default App;
