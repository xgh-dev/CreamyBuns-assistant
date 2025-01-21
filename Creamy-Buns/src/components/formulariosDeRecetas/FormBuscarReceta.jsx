import { useContext, useState } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";

const FormBuscarReceta = () => {
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    setListaDeRecetasOriginal,
  } = useContext(RecetarioContext);

  //hook para buscar receta
  const [nombre, setNombre] = useState("");

  const handleFormBuscarReceta = (e) => {
    e.preventDefault();
    setListaDeRecetasOriginal(listaDeRecetas); //creamos una copia de la lista para poder recuperarla
    if (nombre !== "") {
      setListaDeRecetas(
        listaDeRecetas.filter((receta) =>
          receta.nombre_del_postre.toLowerCase().includes(nombre.toLowerCase())
        )
      );
      setNombre("");
    } else {
      //en caso de que se ejecute el else renderizamos de nuevo todo
      if (listaDeRecetasOriginal.length !== listaDeRecetas.length){
        //de esta forma si las listas miden diferente podremos restaurarlas al volver a dar click
        setListaDeRecetas(listaDeRecetasOriginal);
        setNombre("");
      }
      setNombre("");
      console.log("no deje campos vacios");
    }
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default FormBuscarReceta;
