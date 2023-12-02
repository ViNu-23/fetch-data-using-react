import React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";

function Main() {
  return (
    <>
      <App />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
