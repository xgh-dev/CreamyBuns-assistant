import { useState } from "react";
import {
  ContenedorPrincipal,
  Header,
  ContenedorSecundario,
  ContenedorDeEtiquetasForm,
  Input,
  InputSubmit,
  Label,
  Formulario,
  ContenedorDeFormulario,
  ContenedorDeTabla,
  Tituloh1,
  ContenedorDeAgregarCliente,
} from "./Clientes.styled.js";
import ModalAgregarCliente from "../Modals/ModalAgregarCliente.jsx";
import TablaDeClientes from "./tablasClientes/TablaClientes.jsx";

const Clientes = () => {

  //definir los hooks
  const [buscarClientes, setBuscarCliente] = useState("");
 
  return (
    <>
      <ContenedorPrincipal>
        <Header>
          <Tituloh1>Clientes</Tituloh1>
        </Header>
        <ContenedorSecundario>
          <ContenedorDeFormulario className="divFormulario">
            <Formulario action="">
              <ContenedorDeEtiquetasForm>
                <Label htmlFor="nombre">Nombre:</Label>
                <Input
                  type="text"
                  id="nombre"
                  placeholder="Ingrese un nombre"
                  value={buscarClientes}
                  onChange={(e) => setBuscarCliente(e.target.value)}
                />
              </ContenedorDeEtiquetasForm>
              <InputSubmit type="submit" value="Buscar" />
            </Formulario>
          </ContenedorDeFormulario>
          <ContenedorDeTabla className="divTabla">
            <TablaDeClientes />
          </ContenedorDeTabla>
          <ContenedorDeAgregarCliente>
            <ModalAgregarCliente />
          </ContenedorDeAgregarCliente>
        </ContenedorSecundario>
      </ContenedorPrincipal>
    </>
  );
};

export default Clientes;

//tr para filas
//td para agregar una celda (columna)

/*

*/

/*
Para tabla responsiva
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
*/
