import React, { useState } from "react";
// import './App.css'
//? metodos para manejar las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//? importar las paginas
import RoutesApp from "./routes/RoutesApp";
import LoginScreem from "./pages/LoginScreem";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes login={login}>
                <RoutesApp cambiarLogin={cambiarLogin} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={<LoginScreem cambiarLogin={cambiarLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
