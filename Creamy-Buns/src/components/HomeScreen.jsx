import { Link } from "react-router-dom";
import imagenPedidos from "../assets/imagenPedidos.png";
import imagenRecetario from "../assets/imagenRecetario.png";

const HomeScreen = () => {
  return (
    <>
      <header className="homeScreeTitleContainer">
        <h1 className="homeScreenTitle">Creamy Buns</h1>
      </header>
      <div className="homeScreenPrincipalContainer">
        <Link to={"/recetario"} className="cardHomeScreen">
          <div
            className="recetarioContenedor"
            style={{ backgroundImage: `url(${imagenRecetario})` }}
          >
            {/* Aquí puedes agregar contenido si es necesario */}
          </div>
        </Link>
        <Link to={"/pedidos"} className="cardHomeScreen">
          <div
            className="pedidosContenedor"
            style={{ backgroundImage: `url(${imagenPedidos})` }}
          >
            {/* Aquí puedes agregar contenido si es necesario */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;
