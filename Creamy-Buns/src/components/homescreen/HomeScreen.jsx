import { Link } from "react-router-dom";
import {BodyCards,CardPedidos,CardRecetario,Header,Titulo } from "./HomeScreen.styled.js";


const HomeScreen = () => {
  return (
    <>
      <Header>
        <Titulo >Creamy Buns</Titulo>
      </Header>
      <BodyCards>
        <Link to={"/recetario"}>
          <CardRecetario/>
        </Link>
        <Link to={"/pedidos"}>
          <CardPedidos />
        </Link>
      </BodyCards>
    </>
  );
};

export default HomeScreen;
