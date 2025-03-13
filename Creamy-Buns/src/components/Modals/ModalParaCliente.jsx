import { useState, useContext, useEffect } from "react";
import {
  CloseButton,
  ContenedorDelModal,
  Modal,
  ActualizarButton,
  EliminarButton,
} from "./ModalParaClientes.styled.js";
import { ClientesContext } from "../contextos/ClientesContext";

const ModalParaCliente = ({ cliente, isOpen, setIsOpen }) => {
  //hook para obtener el contexto
  const  {listaDeClientes, setListaDeClientes} = useContext(ClientesContext);

  //hook para actualizar datos
  const [datosNuevos, setDatosNuevos] = useState({
    nombre: cliente.retornarDatos().nombre,
    apellidos: cliente.retornarDatos().apellidos,
    telefono: cliente.retornarDatos().telefono,
    correo: cliente.retornarDatos().correo,
    direccion: cliente.retornarDatos().direccion,
  });
  //console.log(cliente.retornarDatos())
  //funcion que ejecutara los cambios de datos
  const funcionParaActualizarDatos = (e) => {
    e.preventDefault();
    if (datosNuevos.nombre !== cliente.nombre) {
      console.log("nombre actualizado");
      cliente.actualizarNombre(datosNuevos.nombre);
      //clientes[cliente.id-1].nombre=datosNuevos.nombre;
    }
    //definir la actualizaciones de datos
    if (datosNuevos.apellidos !== cliente.retornarDatos().apellidos) {
      cliente.actualizarApellidos(datosNuevos.apellidos);
    }

    console.log("datos actualizados: ", datosNuevos);
  };
  const funcionParaEliminarCliente = (e) => {
    e.preventDefault();
    console.log("accediendo a eliminar cliente");
    const confirmacionParaEliminar = window.confirm(`Confirme la eliminacion del cliente ${cliente.retornarDatos().nombre} ${cliente.retornarDatos().apellidos}`)
    if (confirmacionParaEliminar === true){
      console.log('cliente eliminado',cliente)
      setIsOpen(false)
      cliente.eliminarCliente()
    }
  };
  //avisar que seleccionamos un cliente
  /*useEffect(() => {
    console.log(cliente.retornarDatos())
  })*/

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
          <EliminarButton type="button" onClick={funcionParaEliminarCliente}>
            Eliminar
          </EliminarButton>
        </form>
      </Modal>
    </ContenedorDelModal>
  );
};

export default ModalParaCliente;
