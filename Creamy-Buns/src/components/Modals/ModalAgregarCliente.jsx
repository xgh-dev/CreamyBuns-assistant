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
  //estado para manipular la apertura y cierre del modal
  const [isOpen, setIsOpen] = useState(false);

  //estado para capturar los datos del cliente
  const [agregarCliente, setAgregarCliente] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  //llamar al contexto
  const { listaDeClientes, setListaDeClientes } =
    useContext(ClientesContext);

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
    setListaDeClientes([...listaDeClientes, agregarCliente]);
    console.log(listaDeClientes);
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
