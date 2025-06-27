import { useContext } from "react";
import ModalAgregarPedido from "./Modals/ModalAgregarPedido";
import FormBuscarPedidos from "./formularioDePedidos/FormBuscarPedido";
import ListaDePedidos from "./renderListPedidos/ListaDePedidos";
import { RecetarioContext } from "./contextos/RecetarioContext";
import { ClientesContext } from "./contextos/ClientesContext";
import {
  Header,
  Tituloh1,
  ContenedorPrincipal,
  ContenedorSecundario,
  ModalContainer,
} from "./Clientes.styled";

const Pedidos = () => {
  const { listaDeRecetas } = useContext(RecetarioContext);
  const { listaDeClientes } = useContext(ClientesContext);
  return (
    <>
      <ContenedorPrincipal>
        <Header>
          <Tituloh1>Pedidos</Tituloh1>
        </Header>
        <ContenedorSecundario>
          <FormBuscarPedidos />
          <ListaDePedidos />
        </ContenedorSecundario>
        <ModalContainer>
          <ModalAgregarPedido
            clientes={listaDeClientes}
            recetas={listaDeRecetas}
          />
        </ModalContainer>
      </ContenedorPrincipal>
    </>
  );
};

export default Pedidos;
