import { createContext } from "react";
import { useState,useEffect } from "react";
import { obtenerRecetasApi, eliminarReceta, nuevaReceta } from "../../apiAcces";

export const RecetarioContext = createContext(null);

export const RecetarioContextProvider = ({ children }) => {
  

  //estado para buscar receta esto se convertira en una funcion
  const [buscarReceta, setBuscarReceta] = useState("");
  //estado para eliminar receta, este se convertira en una funcion que elimine la receta
  const [eliminarReceta, setEliminarReceta] = useState("");
  //hook de la lista de recetas
  const [listaDeRecetas, setListaDeRecetas] = useState([]);

  //useEffect nos permitira que al iniciar la aplicacion podamos alimentar estados con funciones asyncronas de una manera limpiar
  useEffect(() => {
    const cargarRecetas = async() => {
      const datos = await obtenerRecetasApi()
      setListaDeRecetas(datos)}
    cargarRecetas()
  },[])

  return (
    <RecetarioContext.Provider
      value={{
        buscarReceta,
        setBuscarReceta,
        eliminarReceta,
        setEliminarReceta,
        listaDeRecetas,
        setListaDeRecetas,
        obtenerRecetasApi,
        
      }}
    >
      {children}
    </RecetarioContext.Provider>
  );
};

