import React from "react";
import ReactDOM from "react-dom/client";
import Checker from "./components/Example/Checker";
import Delete from "./components/Example/Delete";
import Incrementer from "./components/Example/Incrementer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Checker />
    <Incrementer />
    <Delete />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
