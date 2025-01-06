import { RecetarioContext } from "../contextos/RecetarioContext";
import { useContext, useState, useEffect } from "react";

const FormAgregarReceta = () => {
  const { nuevaReceta, setNuevaReceta } = useContext(RecetarioContext);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoFile, setNuevoFile] = useState("");
  const [error, setError] = useState(false);

  const handleFormAgregarReceta = (e) => {
    e.preventDefault(); //sin esto crearemos renderizados innecesarios
    setError(false);
    if (nuevoNombre !== "" && nuevoFile !== "") {
      setNuevaReceta({ nuevoNombre, nuevoFile });
      console.log(nuevaReceta);
      setNuevoNombre("");
      setNuevoFile("");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (nuevaReceta){
      console.log(nuevaReceta)
    }
  },[nuevaReceta])

  return (
    <>
      <div>
        <form action="" onSubmit={handleFormAgregarReceta}>
          <label>Nombre de la receta</label>
          <input
            type="text"
            placeholder="Ingresar nuevo nombre"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
          <label>Cargar receta</label>
          <input
            type="text"
            placeholder="Cargue la receta (imagen)"
            value={nuevoFile}
            onChange={(e) => setNuevoFile(e.target.value)}
          />
          <input type="submit" value="Agregar" />
        </form>
        {error ? <p>No pueden quedar campos vacios</p> : ""}
      </div>
    </>
  );
};

export default FormAgregarReceta;
