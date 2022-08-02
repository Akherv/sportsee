/**
 * @file index.js is the root entry of the app
 * @author Akherv
 * @see <a href="https://github.com/Akherv/sportsee.git" target="_blank">Repo Git</a>
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "./style/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
