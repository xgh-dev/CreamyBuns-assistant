import { useState } from "react";
import {
  ContenedorDeFormulario,
  ContenedorDeEtiquetasForm,
  Formulario,
  Input,
  InputSubmit,
  Label,
} from "./FormBuscarClientes.styled.js";

const FormBuscarClientes = ({ listaDeClientes, setListaDeClientes,ListaDeClientesOriginal }) => {
  //hook para guardar cliente
  const [buscarCliente, setBuscarCliente] = useState("");

  const funcionBucarCliente = (e) => {
    e.preventDefault();
    if (buscarCliente !== "") {
      let respuesta = listaDeClientes.filter((cliente) =>
        cliente.nombre.toLowerCase().includes(buscarCliente.toLowerCase())
      );
      console.log(respuesta);
      setListaDeClientes(respuesta);
    } else {
      //con esto refrescamos la lista al volver a dar click si el input esta vacio
      setListaDeClientes(ListaDeClientesOriginal)
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
