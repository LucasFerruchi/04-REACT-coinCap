import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomeScreen from "../pages/HomeScreen";
import ErrorScreen from "../pages/ErrorScreen";
import AboutScreen from "../pages/AboutScreen";
import CoinScreen from "../pages/CoinScreen";
// import AdminScreen from "./pages/AdminScreen";

function RoutesApp({ cambiarLogin }) {
  return (
    <>
      <NavBar cambiarLogin={cambiarLogin} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" element={<AboutScreen />} />
        {/* <Route path="/Admin" element={<AdminScreen />} /> */}
        <Route path="/coin/:id" element={<CoinScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
