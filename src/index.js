import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Tmdb from "./service/tmdb";

const tmdb = new Tmdb(process.env.REACT_APP_TMDB_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App tmdb={tmdb} />
  </React.StrictMode>,
  document.getElementById("root")
);
