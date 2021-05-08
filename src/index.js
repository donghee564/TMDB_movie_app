import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Tmdb from "./service/tmdb";
import { HashRouter } from "react-router-dom";

const tmdb = new Tmdb(process.env.REACT_APP_TMDB_API_KEY);

ReactDOM.render(
  <HashRouter>
    <App tmdb={tmdb} />
  </HashRouter>,
  document.getElementById("root")
);
