import { createContext, useEffect, useState } from "react";
import { Cliente } from "../../clases/claseClientes.js";
import { obtenerClientesApi } from "../../apiAcces.js";

//crear la constante del contexto
export const ClientesContext = createContext(null);

//crear la constante que sera el contenxtProvider que envolvera elementos para que los elementos dentro puedan usar la constante del contexto
export const ClientesContextProvider = ({ children }) => {
  /*const clientes = [
    new Cliente(
      1,
      "Emilio",
      "Navarro Torres",
      "555-951-4863",
      "Unidad Habitacional 159, Ciudad",
      "emilio.navarro@email.com"
    ),
    new Cliente(
      2,
      "Silvia",
      "Ortega Ramírez",
      "555-369-7531",
      "Conjunto Residencial 369, Ciudad",
      "silvia.ortega@email.com"
    ),
    new Cliente(
      3,
      "Héctor",
      "Sánchez Domínguez",
      "555-147-8523",
      "Boulevard Reforma, Ciudad",
      "hector.sanchez@email.com"
    ),
    new Cliente(
      4,
      "Isabel",
      "Rodríguez Castillo",
      "555-321-6549",
      "Paseo del Valle 741, Ciudad",
      "isabel.rodriguez@email.com"
    ),
    new Cliente(
      5,
      "Oscar",
      "Vargas López",
      "555-753-9516",
      "Fraccionamiento Sur, Ciudad",
      "oscar.vargas@email.com"
    ),
    new Cliente(
      6,
      "Raúl",
      "Cervantes Pérez",
      "555-258-1473",
      "Zona Centro 654, Ciudad",
      "raul.cervantes@email.com"
    ),
    new Cliente(
      7,
      "Teresa",
      "Méndez Ruiz",
      "555-654-2581",
      "Privada Arboleda, Ciudad",
      "teresa.mendez@email.com"
    ),
    new Cliente(
      8,
      "Francisco",
      "Domínguez Salinas",
      "555-147-3695",
      "Residencial los Pinos, Ciudad",
      "francisco.dominguez@email.com"
    ),
    new Cliente(
      9,
      "Beatriz",
      "Hernández Ortega",
      "555-987-1234",
      "Plaza del Sol 963, Ciudad",
      "beatriz.hernandez@email.com"
    ),
    new Cliente(
      10,
      "Guillermo",
      "Suárez Gutiérrez",
      "555-369-8521",
      "Villas del Lago 753, Ciudad",
      "guillermo.suarez@email.com"
    ),
    new Cliente(
      11,
      "Monica",
      "Flores Castillo",
      "555-852-9631",
      "Carretera Vieja 147, Ciudad",
      "monica.flores@email.com"
    ),
    new Cliente(
      12,
      "Eduardo",
      "Paredes Nava",
      "555-321-9874",
      "Sector 258, Ciudad",
      "eduardo.paredes@email.com"
    ),
  ];
  */

  //hook de la lista de clientes
  const [listaDeClientes, setListaDeClientes] = useState([]);
  //hook de la copia de recuperacion de la lista de clientes
  const [listaDeClientesCopia, setListaDeClientesCopia] = useState([]);

  const cargarClientes = async () => {
    //aqui llamaremos a la api para cargar la lista
    try {
      const datos = await obtenerClientesApi();
      console.log(datos);
      //seteamos el hook con un map a los datos obtenidos de la consulta
      const listaConClases = datos.map(
        (cliente) =>
          new Cliente(
            cliente.id,
            cliente.nombre,
            cliente.apellidos,
            cliente.telefono,
            cliente.direccion,
            cliente.correo
          )
      );

      setListaDeClientes(listaConClases);
      setListaDeClientesCopia(listaConClases);
    } catch (error) {
      console.error("error al cargar con la api", error);
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <ClientesContext.Provider
      value={{
        listaDeClientes,
        setListaDeClientes,
        listaDeClientesCopia,
        setListaDeClientesCopia,
        Cliente,
      }}
    >
      {children}
    </ClientesContext.Provider>
  );
};
