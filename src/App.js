import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Home
        </NavLink>{" "}
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          About
        </NavLink>{" "}
        <NavLink
          to="/discover"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          Discover
        </NavLink>
      </nav>
      {/* <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch> */}
    </div>
  );
}

export default App;
