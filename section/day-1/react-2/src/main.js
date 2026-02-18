import './style.css'

// Import
import React from "https://esm.sh/react@19";
import ReactDOMClient from "https://esm.sh/react-dom@19/client";

const rootEl = document.getElementById("app");

// react createElement
const mainEl = React.createElement(
  "div",
  { Style: "background-color:blueviolet; text-black padding:15px; height:100px;  margin-top:10px; display:flex; flex-direction:column;  " },

  React.createElement(
    "h1",
    { Style: "font-size:30px; font-weight:bold; text-align:center;" },
    "React Learning Path",
  ),

  React.createElement(
    "ul",
    { Style: "display:flex; align-items:center; gap:10px; justify-content:center; margin-top:15px" },

    React.createElement(
      "li",
      { Style: "background-color:red; padding-left:10px;  padding-right:10px;  padding-top:5px; padding-bottom:5px; border-radius:5px; py-1 text-white rounded" },
      "Props",
    ),

    React.createElement(
      "li",
      { className: "bg-blue-500 px-4 py-1 text-white rounded" },
      "Hooks",
    ),

    React.createElement(
      "li",
      { className: "bg-green-500 px-4 py-1 text-white rounded" },
      "Routing",
    ),

    React.createElement(
      "li",
      { className: "bg-yellow-500 px-4 py-1 text-white rounded" },
      "Context Api",
    ),
  ),
);

const root = ReactDOMClient.createRoot(rootEl);
root.render(mainEl);
