import { useState } from "react";
import FormRecetario from "./FormRecetario";
import ListaDeRecetas from "./renderLists/ListaDeRecetas";
import { RecetarioContextProvider } from "./contextos/RecetarioContext";

const Recetario = () => {
  return (
    <>
      <div className="RecetarioMainContainer">
        <h2>Recetario</h2>
        <RecetarioContextProvider>
          <div className="mainFormRecetario">
          <FormRecetario />
          </div>
          <div className="mainListaDeRecetas">
          <ListaDeRecetas />
          </div>
        </RecetarioContextProvider>
      </div>
    </>
  );
};

export default Recetario;
