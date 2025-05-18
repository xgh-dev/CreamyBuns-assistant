import { TableHeader } from "../tablasClientes/TablaClientes.styled.js";
import { ClientesContext } from "../contextos/ClientesContext.jsx";
import { useContext, useState } from "react";
import ModalDatosCliente from "../Modals/ModalDatosCliente.jsx";

const TablaDeClientes = () => {
  //llamar al contexto
  const { listaDeClientes } = useContext(ClientesContext);

  //hook para el modal de los clientes
  const [isOpen, setIsOpen] = useState(false);
  //hook para el cliente
  const [cliente, setCliente] = useState({});
  //funcion para enviar datos al modal y abrirlo
  const handleClientModal = (cliente) => {
    setIsOpen(true);
    setCliente(cliente);
  };

  return (
    <>
      <table className="table table-striped table-hover" style={{margin:0}}>
        <TableHeader>
          <tr>
            <th style={{position:"sticky",top:0,zIndex:10}}>Nombre</th>
            <th style={{position:"sticky",top:0,zIndex:10}}>Apellidos</th>
            <th style={{position:"sticky",top:0,zIndex:10}}>Telefono</th>
          </tr>
        </TableHeader>
        <tbody>
          {listaDeClientes.map((cliente) => (
            <tr key={cliente.id} onClick={() => handleClientModal(cliente)}>
              <td>{cliente.retornarDatos().nombre}</td>
              <td>{cliente.retornarDatos().apellidos}</td>
              <td>{cliente.retornarDatos().telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal para cada cliente */}
      {isOpen && (
        <ModalDatosCliente
          cliente={cliente}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};
export default TablaDeClientes;


/*
recordemos que th es  table header para crear celdas que funcionen como encabezados

td espara generar una celda de datos
*/