import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Home/header"

document.body.className += " js-loading";

// Listen for when everything has loaded
window.addEventListener("load", showPage, false);

function showPage() {
  // Remove the "js-paused" class
  document.body.className = document.body.className.replace("js-loading","");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
