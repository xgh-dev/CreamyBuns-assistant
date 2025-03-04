import { useState } from "react";
import {
  ContenedorPrincipal,
  Header,
  ContenedorSecundario,
  ContenedorDeTabla,
  Tituloh1,
  ContenedorDeAgregarCliente,
} from "./Clientes.styled.js";
import ModalAgregarCliente from "../Modals/ModalAgregarCliente.jsx";
import TablaDeClientes from "./tablasClientes/TablaClientes.jsx";
import FormBuscarClientes from "./formularioDeClientes/FormBuscarClientes.jsx";

const Clientes = () => {

  const clientes = [
    {
      id: 1,
      nombre: "Emilio",
      apellido: "Navarro Torres",
      telefono: "555-951-4863",
      direccion: "Unidad Habitacional 159, Ciudad",
    },
    {
      id: 2,
      nombre: "Silvia",
      apellido: "Ortega Ramírez",
      telefono: "555-369-7531",
      direccion: "Conjunto Residencial 369, Ciudad",
    },
    {
      id: 3,
      nombre: "Héctor",
      apellido: "Sánchez Domínguez",
      telefono: "555-147-8523",
      direccion: "Boulevard Reforma, Ciudad",
    },
    {
      id: 4,
      nombre: "Isabel",
      apellido: "Rodríguez Castillo",
      telefono: "555-321-6549",
      direccion: "Paseo del Valle 741, Ciudad",
    },
    {
      id: 5,
      nombre: "Oscar",
      apellido: "Vargas López",
      telefono: "555-753-9516",
      direccion: "Fraccionamiento Sur, Ciudad",
    },
    {
      id: 6,
      nombre: "Raúl",
      apellido: "Cervantes Pérez",
      telefono: "555-258-1473",
      direccion: "Zona Centro 654, Ciudad",
    },
    {
      id: 7,
      nombre: "Teresa",
      apellido: "Méndez Ruiz",
      telefono: "555-654-2581",
      direccion: "Privada Arboleda, Ciudad",
    },
    {
      id: 8,
      nombre: "Francisco",
      apellido: "Domínguez Salinas",
      telefono: "555-147-3695",
      direccion: "Residencial los Pinos, Ciudad",
    },
    {
      id: 9,
      nombre: "Beatriz",
      apellido: "Hernández Ortega",
      telefono: "555-987-1234",
      direccion: "Plaza del Sol 963, Ciudad",
    },
    {
      id: 10,
      nombre: "Guillermo",
      apellido: "Suárez Gutiérrez",
      telefono: "555-369-8521",
      direccion: "Villas del Lago 753, Ciudad",
    },
    {
      id: 11,
      nombre: "Monica",
      apellido: "Flores Castillo",
      telefono: "555-852-9631",
      direccion: "Carretera Vieja 147, Ciudad",
    },
    {
      id: 12,
      nombre: "Eduardo",
      apellido: "Paredes Nava",
      telefono: "555-321-9874",
      direccion: "Sector 258, Ciudad",
    },
  ];

  //hook de la lista de los clientes
  const [listaDeClientes,setListaDeClientes] = useState(clientes)
  
  return (
    <>
      <ContenedorPrincipal>
        <Header>
          <Tituloh1>Clientes</Tituloh1>
        </Header>
        <ContenedorSecundario>
          <FormBuscarClientes listaDeClientes={listaDeClientes} setListaDeClientes={setListaDeClientes} ListaDeClientesOriginal={clientes}/>
          <ContenedorDeTabla className="divTabla">
            <TablaDeClientes listaDeClientes={listaDeClientes} setListaDeClientes={setListaDeClientes}/>
          </ContenedorDeTabla>
          <ContenedorDeAgregarCliente>
            <ModalAgregarCliente listaDeClientes={listaDeClientes} setListaDeClientes={setListaDeClientes}/>
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


