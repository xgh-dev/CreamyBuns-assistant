import { TableHeader } from "../tablasClientes/TablaClientes.styled.js";
import { ClientesContext } from "../contextos/ClientesContext.jsx";
import { useContext, useState } from "react";
import ModalParaCliente from "../Modals/ModalParaCliente.jsx";

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
      <table className="table table-striped table-hover">
        <TableHeader>
          <tr>
            <td>Nombre</td>
            <td>Apellidos</td>
            <td>Telefono</td>
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
        <ModalParaCliente
          cliente={cliente}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};
export default TablaDeClientes;
