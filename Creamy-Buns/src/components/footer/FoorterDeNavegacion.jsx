import { Link } from "react-router-dom";

const FooterDeNavegacion = () => {
  return (
    <>
      <footer>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <Link to="/">HomeScreen</Link>
          </li>
          <li>
            <Link to="/recetario">Recetario</Link>
          </li>
          <li>
            <Link to="/pedidos">Pedidos</Link>
          </li>
          <li>Clientes</li>
        </ul>
      </footer>
    </>
  );
};

export default FooterDeNavegacion;
