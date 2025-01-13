import { useContext, useEffect, useState } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";

const FormEliminarReceta = () => {
  const { listaDeRecetas, setListaDeRecetas, cargarRecetas } =
    useContext(RecetarioContext);

  //crear un hook que busque la receta
  const [eliminarReceta, setEliminarReceta] = useState("");

  const handleFormEliminarReceta = (e) => {
    e.preventDefault();
    if (eliminarReceta !== "") {
      const listaActualizada = listaDeRecetas.filter(
        (receta) =>
          receta.nombre_del_postre.toLowerCase() !==
          eliminarReceta.toLowerCase()
      );
      setListaDeRecetas(listaActualizada);
      console.log(eliminarReceta);
      setEliminarReceta("");
    } else {
      console.log("no puede dejar campos vacios");
    }
  };
  useEffect(() => {
    if (listaDeRecetas.length == 1) {
      cargarRecetas();
    }
  }, []);

  return (
    <>
      <div className="formularioContenedorRecetas">
        <form
          action=""
          onSubmit={handleFormEliminarReceta}
          className="formularioRecetas"
        >
          <div>
            <label>Ingrese el nombre de la receta</label>
            <input
              type="text"
              placeholder="Nombre de la receta"
              value={eliminarReceta}
              onChange={(e) => setEliminarReceta(e.target.value)}
            />
          </div>
          <input type="submit" value="Eliminar" />
        </form>
      </div>
    </>
  );
};

export default FormEliminarReceta;
