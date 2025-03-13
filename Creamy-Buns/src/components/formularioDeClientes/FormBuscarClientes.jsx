import { useState, useContext } from "react";
import {
  ContenedorDeFormulario,
  ContenedorDeEtiquetasForm,
  Formulario,
  Input,
  InputSubmit,
  Label,
} from "./FormBuscarClientes.styled.js";
import { ClientesContext } from "../contextos/ClientesContext";

const FormBuscarClientes = () => {
  //llamar al contexto
  const {
    listaDeClientes,
    setListaDeClientes,
    listaDeClientesCopia,
    setListaDeClientesCopia,
  } = useContext(ClientesContext);
  //hook para guardar cliente
  const [buscarCliente, setBuscarCliente] = useState("");
  
  const funcionBucarCliente = (e) => {
    e.preventDefault();
    //de esta forma actualizamos la copia con respecto a algun dato que ya modificaramos en la lista de clientes original
    setListaDeClientesCopia(listaDeClientes);
    if (buscarCliente !== "") {
      let respuesta = listaDeClientes.filter((cliente) =>
        cliente
          .retornarDatos()
          .nombre.toLowerCase()
          .includes(buscarCliente.toLowerCase())
      );
      console.log(respuesta);
      setListaDeClientes(respuesta);
    } else {
      //con esto refrescamos la lista al volver a dar click si el input esta vacio
      setListaDeClientes(listaDeClientesCopia);
    }
    setBuscarCliente("");
  };

  return (
    <>
      <ContenedorDeFormulario className="divFormulario">
        <Formulario onSubmit={funcionBucarCliente}>
          <ContenedorDeEtiquetasForm>
            <Label htmlFor="nombre">Nombre:</Label>
            <Input
              type="text"
              id="nombre"
              placeholder="Ingrese un nombre"
              value={buscarCliente}
              onChange={(e) => setBuscarCliente(e.target.value)}
            />
          </ContenedorDeEtiquetasForm>
          <InputSubmit type="submit" value="Buscar" />
        </Formulario>
      </ContenedorDeFormulario>
    </>
  );
};

export default FormBuscarClientes;
