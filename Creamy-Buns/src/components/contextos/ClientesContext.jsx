import { createContext, useEffect, useState } from "react";
import { Cliente } from "../../clases/claseClientes.js";
import { obtenerClientesApi, crearClientesApi } from "../../apiAcces.js";

//crear la constante del contexto
export const ClientesContext = createContext(null);

//crear la constante que sera el contenxtProvider que envolvera elementos para que los elementos dentro puedan usar la constante del contexto
export const ClientesContextProvider = ({ children }) => {
  //hook de la lista de clientes
  const [listaDeClientes, setListaDeClientes] = useState([]);
  //hook de la copia de recuperacion de la lista de clientes
  const [listaDeClientesCopia, setListaDeClientesCopia] = useState([]);

  const cargarClientes = async () => {
    try {
      //aqui llamaremos a la api para cargar la lista
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
      console.error('error en la obtencion de clientes desde la api',error)
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
        crearClientesApi,
      }}
    >
      {children}
    </ClientesContext.Provider>
  );
};
