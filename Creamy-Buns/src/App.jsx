import "./App.css";
import Pedidos from "./components/Pedidos";
import Recetario from "./components/Recetario";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./components/homescreen/HomeScreen";
import InfoDeReceta from "./components/infoRecetas/InfoDeReceta";
import FooterDeNavegacion from "./components/footer/FooterDeNavegacion";
import { EstructuraPrincipal,EstructuraDeVistas } from "./App.styled";

//con estas dependencias activamos las clases de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <EstructuraPrincipal>
        <BrowserRouter>
        <EstructuraDeVistas>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/recetario" element={<Recetario />} />
            <Route path="/receta/:id" element={<InfoDeReceta />} />
            <Route path="/pedidos" element={<Pedidos />} />
          </Routes>
          </EstructuraDeVistas>
          <FooterDeNavegacion />
        </BrowserRouter>
      </EstructuraPrincipal>
    </>
  );
}

export default App;
