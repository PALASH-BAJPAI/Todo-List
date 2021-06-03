import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./header";
import Content from "./content";

ReactDOM.render(
  <div className="back">
    <Header />
    <Content />
  </div>,
  document.getElementById("root")
);
