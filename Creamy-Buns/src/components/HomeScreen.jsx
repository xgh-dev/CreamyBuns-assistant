import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <h1>Home Screen</h1>
      <div>
        <Link to={'/recetario'} >
          <div>
              <h2>Recetario</h2>
          </div>
        </Link>
        <Link to={'/pedidos'}>
        <div>
            <h2>Pedidos</h2>
        </div>
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;
