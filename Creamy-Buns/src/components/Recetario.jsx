import { useState } from "react";
import FormRecetario from "./FormRecetario";
import { RecetarioContextProvider } from "./contextos/RecetarioContext";

const Recetario = () => {
  return (
    <>
      <div className="">
        <h2>Recetario</h2>
        <RecetarioContextProvider>
          <FormRecetario />
        </RecetarioContextProvider>
      </div>
    </>
  );
};

export default Recetario;
