import { useContext, useEffect, useState } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";

const FormEliminarReceta = () => {
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    eliminarRecetaApi,
  } = useContext(RecetarioContext);

  //crear un hook que busque la receta
  const [eliminarReceta, setEliminarReceta] = useState("");

  const handleFormEliminarReceta = (e) => {
    e.preventDefault();

    //buscar la receta
    const recetaParaEliminar = listaDeRecetas.find(
      (receta) =>
        receta.returnarDatos().nombre.toLowerCase() === eliminarReceta.toLowerCase()
    );

    //evaluar si esta existe o no, mediante una negacion, en caso de que no exista se returna la ejecucion del codigo
    if (!recetaParaEliminar) {
      return;
    }

    //apoyarnos de un window confirm para ejecutar o cancelar la eliminacion de la receta
    const confirmacion = window.confirm(
      `Confirme la eliminacion de la receta ${recetaParaEliminar.nombre_del_postre}`
    );
    if (confirmacion === true){
      recetaParaEliminar.eliminarReceta()
      //actualizar la lista renderizada
      const nuevaLista = listaDeRecetas.filter(
        (receta) => receta.returnarDatos().id !== recetaParaEliminar.id
      );
      //setear la lista renderizada
      setListaDeRecetas(nuevaLista);
    } else {
      console.log("Eliminacion cancelada");
    }
  }

  //este codigo restaura la lista en caso de que se buscara algo en el formulario de buscar y asi se quedara, al cambiar de opcion de formulario la lista se regenerara
  useEffect(() => {
    if (listaDeRecetas.length <= listaDeRecetasOriginal.length) {
      setListaDeRecetas(listaDeRecetasOriginal);
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
