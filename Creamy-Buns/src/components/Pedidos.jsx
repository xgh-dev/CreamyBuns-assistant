import { useContext } from "react";
import ModalAgregarPedido from "./Modals/ModalAgregarPedido";
import FormBuscarPedidos from "./formularioDePedidos/FormBuscarPedido";
import TablaDePedidos from "./renderListPedidos/ListaDePedidos";
import { RecetarioContext } from "./contextos/RecetarioContext";
import { ClientesContext } from "./contextos/ClientesContext";

const Pedidos = () => {
    const {listaDeRecetas} = useContext(RecetarioContext)
    const {listaDeClientes} = useContext(ClientesContext)
    return (
        <>
        <h2>Pedidos</h2>
        <div>
            <FormBuscarPedidos/>
            <TablaDePedidos/>
            <ModalAgregarPedido clientes={listaDeClientes} recetas={listaDeRecetas}/>
        </div>
        </>
    )
}

export default Pedidos;