import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUsers } from "react-icons/fa";
import { HiAnnotation } from "react-icons/hi";

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
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/recetario">
              <FaBook />
            </Link>
          </li>
          <li>
            <Link to="/pedidos">
              <HiAnnotation />
            </Link>
          </li>
          <li>
            <FaUsers />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default FooterDeNavegacion;
