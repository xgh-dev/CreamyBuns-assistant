import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <h1 className="homeScreenTitle">Creamy Buns</h1>
      <div className="container">
        <Link to={"/recetario"} className="card">
          <img src="/path-to-recetario-image.jpg" alt="Recetario" />
          <h2>Recetario</h2>
        </Link>
        <Link to={"/pedidos"} className="card">
          <img src="/path-to-pedidos-image.jpg" alt="Pedidos" />
          <h2>Pedidos</h2>
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;