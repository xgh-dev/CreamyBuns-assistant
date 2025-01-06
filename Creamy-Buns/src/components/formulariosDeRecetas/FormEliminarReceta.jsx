import { useContext } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";

const FormEliminarReceta = () => {
  const { eliminarReceta, setEliminarReceta } = useContext(RecetarioContext);

  const handleFormEliminarReceta = (e) => {
    if (eliminarReceta !== "") {
      e.preventDefault();
      console.log(eliminarReceta);
      setEliminarReceta("");
    } else {
      console.log("no puede dejar campos vacios");
    }
  };

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
