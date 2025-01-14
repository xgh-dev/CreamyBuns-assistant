import { createContext } from "react";
import { useState, useEffect } from "react";
import { obtenerRecetasApi, eliminarReceta, nuevaReceta } from "../../apiAcces";

export const RecetarioContext = createContext(null);

export const RecetarioContextProvider = ({ children }) => {
  //hook de la lista de recetas
  const [listaDeRecetas, setListaDeRecetas] = useState([]);

  //hook de proteccion para restaurar la lista original
  const [listaDeRecetasOriginal, setListaDeRecetasOriginal] = useState([]);

  //useEffect nos permitira que al iniciar la aplicacion podamos alimentar estados con funciones asyncronas de una manera limpiar
  const cargarRecetas = async () => {
    const datos = await obtenerRecetasApi();
    setListaDeRecetas(datos);
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
        cargarRecetas,
        listaDeRecetasOriginal,
        setListaDeRecetasOriginal,
      }}
    >
      {children}
    </RecetarioContext.Provider>
  );
};
