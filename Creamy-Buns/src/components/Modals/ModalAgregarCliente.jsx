import { useState } from "react";
import {
  ContenedorDelModal,
  CloseButton,
  Modal,
  OpenButton,
  SaveCloseButton,
} from "./ModalAgregarClientes.styled.js";
import { ClientesContext } from "../contextos/ClientesContext.jsx";
import { useContext } from "react";

const ModalAgregarCliente = () => {
  //llamar al contexto
  const { listaDeClientes, setListaDeClientes, Cliente } =
    useContext(ClientesContext);

  //estado para manipular la apertura y cierre del modal
  const [isOpen, setIsOpen] = useState(false);

  //estado para capturar los datos del cliente
  const [agregarCliente, setAgregarCliente] = useState({
    id: listaDeClientes.length > 0 ? listaDeClientes[listaDeClientes.length - 1].id + 1 : 1,
    nombre: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  //funcion para abrir el modal
  const openModal = () => {
    setIsOpen(true);
    console.log("modal abierto");
  };

  //funcion para cerrar el modal
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    console.log("modal cerrado");
  };

  const SaveCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    console.log("modal cerrado y datos guardados");
    console.log(agregarCliente);
    //falta la api que agregue la api que cargue los clientes
    setListaDeClientes([...listaDeClientes, new Cliente(agregarCliente.id, agregarCliente.nombre, agregarCliente.apellidos, agregarCliente.telefono, agregarCliente.mail, agregarCliente.direccion)]);
    console.log(listaDeClientes);
    setAgregarCliente({
      id: agregarCliente.id + 1,
      nombre: "",
      apellidos: "",
      telefono: "",
      correo: "",
      direccion: "",})
  };

  return (
    <>
      <OpenButton onClick={() => openModal()}>Agregar Cliente</OpenButton>
      {isOpen ? (
        <ContenedorDelModal>
          {" "}
          <Modal>
            <h1>Modal abierto</h1>
            <form action="">
              <label htmlFor="">Ingresar Nombre</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ingresar nombre"
                value={agregarCliente.nombre}
                onChange={(e) =>
                  setAgregarCliente({
                    ...agregarCliente,
                    nombre: e.target.value,
                  })
                }
              />
              <label htmlFor="">Ingresar Apellidos</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ingresar apellidos"
                value={agregarCliente.apellidos}
                onChange={(e) =>
                  setAgregarCliente({
                    ...agregarCliente,
                    apellidos: e.target.value,
                  })
                }
              />
              <label htmlFor="">Ingresar Telefono</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ingresar Telefono"
                value={agregarCliente.telefono}
                onChange={(e) =>
                  setAgregarCliente({
                    ...agregarCliente,
                    telefono: e.target.value,
                  })
                }
              />
              <label htmlFor="">Ingresar Correo electronico</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Ingresar correo electronico"
                value={agregarCliente.correo}
                onChange={(e) =>
                  setAgregarCliente({
                    ...agregarCliente,
                    correo: e.target.value,
                  })
                }
              />
              <label htmlFor="">Ingresar Domicilio</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ingresar Domicilio"
                value={agregarCliente.direccion}
                onChange={(e) =>
                  setAgregarCliente({
                    ...agregarCliente,
                    direccion: e.target.value,
                  })
                }
              />
              <SaveCloseButton type="button" onClick={SaveCloseModal}>
                Guardar
              </SaveCloseButton>
              <CloseButton type="button" onClick={closeModal}>
                Cerrar
              </CloseButton>
            </form>
          </Modal>
        </ContenedorDelModal>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalAgregarCliente;
