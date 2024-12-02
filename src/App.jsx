import React from "react";
// import './App.css'
//? metodos para manejar las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//? importar las paginas
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen";
// import AdminScreen from "./pages/AdminScreen";
import LoginScreem from "./pages/LoginScreem";
import AboutScreen from "./pages/AboutScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreem />} />

          {/* <Route path="/Admin" element={<AdminScreen />} /> */}
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
