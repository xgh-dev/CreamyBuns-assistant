import { useState, useContext } from "react";
import {
  CloseButton,
  ContenedorDelModal,
  Modal,
  ActualizarButton,
} from "./ModalParaClientes.styled.js";
import { ClientesContext } from "../contextos/ClientesContext";

const ModalParaCliente = ({ cliente, isOpen, setIsOpen }) => {
  //hook para obtener el contexto
  const { clientes } = useContext(ClientesContext);

  //hook para actualizar datos
  const [datosNuevos, setDatosNuevos] = useState({
    nombre: cliente.nombre,
    apellidos: cliente.apellidos,
    telefono: cliente.telefono,
    correo: cliente.correo,
    direccion: cliente.direccion,
  });

  //funcion que ejecutara los cambios de datos
  const funcionParaActualizarDatos = (e) => {
    e.preventDefault();
    if (datosNuevos.nombre !== cliente.nombre) {
      console.log("nombre actualizado");
      console.log('id',cliente.id)
      clientes[cliente.id-1].nombre=datosNuevos.nombre;
    }
    console.log(datosNuevos);
  };

  return (
    <ContenedorDelModal>
      <Modal>
        <h1>Modal abierto</h1>
        <form action="">
          <label htmlFor="">Ingresar Nombre</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ingresar nombre"
            value={datosNuevos.nombre}
            onChange={(e) =>
              setDatosNuevos({ ...datosNuevos, nombre: e.target.value })
            }
          />
          <label htmlFor="">Ingresar Apellidos</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ingresar apellidos"
            value={datosNuevos.apellidos}
            onChange={(e) =>
              setDatosNuevos({ ...datosNuevos, apellidos: e.target.value })
            }
          />
          <label htmlFor="">Ingresar Telefono</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ingresar Telefono"
            value={datosNuevos.telefono}
            onChange={(e) =>
              setDatosNuevos({ ...datosNuevos, telefono: e.target.value })
            }
          />
          <label htmlFor="">Ingresar Correo electronico</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Ingresar correo electronico"
            value={datosNuevos.correo}
            onChange={(e) =>
              setDatosNuevos({ ...datosNuevos, correo: e.target.value })
            }
          />
          <label htmlFor="">Ingresar Domicilio</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ingresar Domicilio"
            value={datosNuevos.direccion}
            onChange={(e) =>
              setDatosNuevos({ ...datosNuevos, direccion: e.target.value })
            }
          />
          <ActualizarButton type="button" onClick={funcionParaActualizarDatos}>
            Actualizar
          </ActualizarButton>
          <CloseButton type="button" onClick={() => setIsOpen(false)}>
            Cerrar
          </CloseButton>
        </form>
      </Modal>
    </ContenedorDelModal>
  );
};

export default ModalParaCliente;
