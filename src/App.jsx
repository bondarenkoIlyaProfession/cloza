import React from "react";
import { Routes, Route } from "react-router";

import "./scss/app.scss";

import { Header } from "./layout";
import { Home } from "./pages";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
