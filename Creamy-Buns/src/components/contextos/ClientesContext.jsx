import { createContext, useEffect, useState } from "react";

//crear la constante del contexto
export const ClientesContext = createContext(null);

//crear la constante que sera el contenxtProvider que envolvera elementos para que los elementos dentro puedan usar la constante del contexto
export const ClientesContextProvider = ({ children }) => {
  const clientes = [
    {
      id: 1,
      nombre: "Emilio",
      apellidos: "Navarro Torres",
      telefono: "555-951-4863",
      direccion: "Unidad Habitacional 159, Ciudad",
      correo: "emilio.navarro@email.com"
    },
    {
      id: 2,
      nombre: "Silvia",
      apellidos: "Ortega Ramírez",
      telefono: "555-369-7531",
      direccion: "Conjunto Residencial 369, Ciudad",
      correo: "silvia.ortega@email.com"
    },
    {
      id: 3,
      nombre: "Héctor",
      apellidos: "Sánchez Domínguez",
      telefono: "555-147-8523",
      direccion: "Boulevard Reforma, Ciudad",
      correo: "hector.sanchez@email.com"
    },
    {
      id: 4,
      nombre: "Isabel",
      apellidos: "Rodríguez Castillo",
      telefono: "555-321-6549",
      direccion: "Paseo del Valle 741, Ciudad",
      correo: "isabel.rodriguez@email.com"
    },
    {
      id: 5,
      nombre: "Oscar",
      apellidos: "Vargas López",
      telefono: "555-753-9516",
      direccion: "Fraccionamiento Sur, Ciudad",
      correo: "oscar.vargas@email.com"
    },
    {
      id: 6,
      nombre: "Raúl",
      apellidos: "Cervantes Pérez",
      telefono: "555-258-1473",
      direccion: "Zona Centro 654, Ciudad",
      correo: "raul.cervantes@email.com"
    },
    {
      id: 7,
      nombre: "Teresa",
      apellidos: "Méndez Ruiz",
      telefono: "555-654-2581",
      direccion: "Privada Arboleda, Ciudad",
      correo: "teresa.mendez@email.com"
    },
    {
      id: 8,
      nombre: "Francisco",
      apellidos: "Domínguez Salinas",
      telefono: "555-147-3695",
      direccion: "Residencial los Pinos, Ciudad",
      correo: "francisco.dominguez@email.com"
    },
    {
      id: 9,
      nombre: "Beatriz",
      apellidos: "Hernández Ortega",
      telefono: "555-987-1234",
      direccion: "Plaza del Sol 963, Ciudad",
      correo: "beatriz.hernandez@email.com"
    },
    {
      id: 10,
      nombre: "Guillermo",
      apellidos: "Suárez Gutiérrez",
      telefono: "555-369-8521",
      direccion: "Villas del Lago 753, Ciudad",
      correo: "guillermo.suarez@email.com"
    },
    {
      id: 11,
      nombre: "Monica",
      apellidos: "Flores Castillo",
      telefono: "555-852-9631",
      direccion: "Carretera Vieja 147, Ciudad",
      correo: "monica.flores@email.com"
    },
    {
      id: 12,
      nombre: "Eduardo",
      apellidos: "Paredes Nava",
      telefono: "555-321-9874",
      direccion: "Sector 258, Ciudad",
      correo: "eduardo.paredes@email.com"
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
      value={{ listaDeClientes, setListaDeClientes, listaDeClientesCopia,clientes }}
    >
      {children}
    </ClientesContext.Provider>
  );
};
