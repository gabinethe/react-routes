import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./Componentes/Home/Home";
import Mapas from "./Componentes/Mapas/Mapas";
import Temperatura from "./Componentes/Temperatura/Temperatura";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Mapas />} path="/mapas" />
          <Route element={<Temperatura />} path="/temperatura" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
