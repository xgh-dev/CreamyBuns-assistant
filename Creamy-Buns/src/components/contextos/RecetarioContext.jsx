import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  obtenerRecetasApi,
  eliminarRecetaApi,
  nuevaRecetaApi,
} from "../../apiAcces.js";
import { Receta } from "../../clases/claseCliente.js";

export const RecetarioContext = createContext(null);

export const RecetarioContextProvider = ({ children }) => {
  //hook de la lista de recetas
  const [listaDeRecetas, setListaDeRecetas] = useState([]);

  //hook de proteccion para restaurar la lista original
  const [listaDeRecetasOriginal, setListaDeRecetasOriginal] = useState([]);

  //useEffect nos permitira que al iniciar la aplicacion podamos alimentar estados con funciones asyncronas de una manera limpiar
  //proteger esta funcion en caso de que no exista conexion con el servidor retorne una lista vacia
  const cargarRecetas = async () => {
    const datos = await obtenerRecetasApi();
    const listaConClases = datos.map(
      (receta) =>
        new Receta(
          receta.id,
          receta.nombre_del_postre,
          receta.precio,
          receta.ingredientes,
          receta.procedimiento,
          receta.observaciones,
          receta.imagen
        )
    );
    //funciona mi clase
    //console.log(listaClases[0].mostrarDatos());
    setListaDeRecetas(listaConClases);
  };
  useEffect(() => {
    cargarRecetas();
  }, []);

  return (
    <RecetarioContext.Provider
      value={{
        listaDeRecetas,
        setListaDeRecetas,
        obtenerRecetasApi,
        eliminarRecetaApi,
        nuevaRecetaApi,
        cargarRecetas,
        listaDeRecetasOriginal,
        setListaDeRecetasOriginal,
        Receta
      }}
    >
      {children}
    </RecetarioContext.Provider>
  );
};
