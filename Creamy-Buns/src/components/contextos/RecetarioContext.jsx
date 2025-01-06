import { createContext } from "react";
import { useState } from "react";

export const RecetarioContext = createContext(null);

export const RecetarioContextProvider = ({children}) => {
    const [nuevaReceta, setNuevaReceta] = useState({
        nombre:null,
        archivlo:null
        });
      //estado para buscar receta
      const [buscarReceta, setBuscarReceta] = useState("");
      //estado para eliminar receta
      const [eliminarReceta, setEliminar] = useState("");

    return (
        <RecetarioContext.Provider value={{nuevaReceta,setNuevaReceta,buscarReceta,setBuscarReceta,eliminarReceta,setEliminar}}>
            {children}
        </RecetarioContext.Provider>
    )
}