import { createContext, useEffect, useState } from "react";

//crear la constante del contexto
export const ClientesContext = createContext(null);

//crear la constante que sera el contenxtProvider que envolvera elementos para que los elementos dentro puedan usar la constante del contexto
export const ClientesContextProvider = ({ children }) => {
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

  //hook de la lista de clientes
  const [listaDeClientes, setListaDeClientes] = useState(clientes);
  //hook de la copia de recuperacion de la lista de clientes
  const [listaDeClientesCopia, setListaDeClientesCopia] = useState(clientes);

  const cargarClientes = async () => {
    //aqui llamaremos a la api para cargar la lista
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <ClientesContext.Provider
      value={{ listaDeClientes, setListaDeClientes, listaDeClientesCopia }}
    >
      {children}
    </ClientesContext.Provider>
  );
};
