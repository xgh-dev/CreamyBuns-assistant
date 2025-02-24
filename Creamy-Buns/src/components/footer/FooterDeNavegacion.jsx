import { Link } from "react-router-dom";
import { FooterList,IconStyledFaHome,IconStyledFaBook,IconStyledHiAnnotation,IconStyledFaUsers } from "./FooterStyle.js";

const FooterDeNavegacion = () => {
  return (
    <>
      <footer>
        <FooterList>
          <li>
            <Link to="/">
              <IconStyledFaHome/>
            </Link>
          </li>
          <li>
            <Link to="/recetario">
              <IconStyledFaBook/>
            </Link>
          </li>
          <li>
            <Link to="/pedidos">
              <IconStyledHiAnnotation/>
            </Link>
          </li>
          <li>
            <IconStyledFaUsers/>
          </li>
        </FooterList>
      </footer>
    </>
  );
};

export default FooterDeNavegacion;
