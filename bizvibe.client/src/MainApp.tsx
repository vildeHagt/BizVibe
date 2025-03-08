import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import React from "react";
import { OrganizationDetails } from "./screens/OrganizationDetails";

const MainApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/organization" element={<OrganizationDetails />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainApp;
