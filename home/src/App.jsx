import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "home" }} />
    <HomeContent />
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
