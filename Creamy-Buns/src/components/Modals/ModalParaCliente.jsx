import { useState, useContext } from "react";
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
    if (JSON.stringify(datosNuevos) !== JSON.stringify(cliente.retornarDatos()) ){
      console.log('se ejecuta la condicion y se actualizan los datos')
      console.log(cliente.retornarDatos())
      //aqui ejecutaremos el metodo de clase que mandara los datos nuevos a la api
      cliente.actualizarDatos(datosNuevos)
      setIsOpen(false)    
    }

    //console.log("datos actualizados: ", datosNuevos);
  };
  const funcionParaEliminarCliente = (e) => {
    e.preventDefault();
    console.log("accediendo a eliminar cliente");
    const confirmacionParaEliminar = window.confirm(`Confirme la eliminacion del cliente ${cliente.retornarDatos().nombre} ${cliente.retornarDatos().apellidos}`)
    if (confirmacionParaEliminar === true){
      console.log('cliente eliminado',cliente)
      setIsOpen(false)
      cliente.eliminarCliente()
      const nuevaLista = listaDeClientes.filter(iterador => iterador.retornarId()  !== cliente.retornarId() )
      setListaDeClientes(nuevaLista);
    }
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
          <EliminarButton type="button" onClick={funcionParaEliminarCliente}>
            Eliminar
          </EliminarButton>
        </form>
      </Modal>
    </ContenedorDelModal>
  );
};

export default ModalParaCliente;

/* para comparar objtos por valores en un condicional usaremos la funcion JSON.stringify() para comparaciones de pocos datos, pero no es tan eficiente por que igual compara  quelas llaves esten en el mismo orden, por lo tanto la mejor opcion es utilizar _.isEqualde de la libreria Lodash donde el orden de las llaves no importa siempre
*/