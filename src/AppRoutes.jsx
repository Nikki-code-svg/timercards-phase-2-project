import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import LongTimer from "./LongTimer";
import Cards from "./Cards";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LongTimer" element={<LongTimer />} />
      <Route path="/Cards/:id" element={<Cards />} />
    </Routes>
  );
};

export default AppRoutes;
