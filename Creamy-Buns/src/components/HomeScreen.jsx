import { Link } from "react-router-dom";
import imagenPedidos from '../assets/imagenPedidos.png'
import imagenRecetario from '../assets/imagenRecetario.png'


const HomeScreen = () => {
  return (
    <>
      <h1 className="homeScreenTitle">Creamy Buns</h1>
      <div className="homeScreenPrincipalContainer">
        <Link to={"/recetario"} className="card">
          <div className="recetarioContenedor" style={{ backgroundImage: `url(${imagenRecetario})` }}>
            
          </div>
        </Link>
        <Link to={"/pedidos"} className="card">
          <div className="pedidosContenedor" style={{backgroundImage: `url(${imagenPedidos})`}}>
            
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;
