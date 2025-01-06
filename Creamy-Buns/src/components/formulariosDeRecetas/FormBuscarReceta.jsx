import { useContext, useState, useEffect } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";

const FormBuscarReceta = () => {
  const { buscarReceta, setBuscarReceta } = useContext(RecetarioContext);
  //const [buscarReceta,setBuscarReceta] = useState('')

  const handleFormBuscarReceta = (e) => {
    e.preventDefault();
    console.log(buscarReceta);
  };

  return (
    <>
      <div className="formularioContenedorRecetas">
        <form onSubmit={handleFormBuscarReceta} className="formularioRecetas">
          <div>
          <label>Ingrese el nombre de la receta</label>
          <input
            type="text"
            placeholder="Nombre de la receta"
            onChange={(e) => setBuscarReceta(e.target.value)}
          />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default FormBuscarReceta;
