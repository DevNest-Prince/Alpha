import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Legal from "../pages/Legal";
import TermsOfService from "../pages/TermsOfService";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Legal />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
};

export default AppRoutes;
