import { useContext, useEffect, useState } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";

const FormEliminarReceta = () => {
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    eliminarRecetaApi
  } = useContext(RecetarioContext);

  //crear un hook que busque la receta
  const [eliminarReceta, setEliminarReceta] = useState("");

  const handleFormEliminarReceta = (e) => {
    e.preventDefault();
    if (eliminarReceta !== "") {
      //acutalizar la lista
      /*const listaActualizada = listaDeRecetas.filter(
        (receta) => 
          receta.nombre_del_postre.toLowerCase() !==
          eliminarReceta.toLowerCase()
      );*/
      const nuevaLista = listaDeRecetas.filter(receta => {
        if (receta.nombre_del_postre.toLowerCase() !==
        eliminarReceta.toLowerCase()){
          return receta
        } else {
          console.log(receta)
          //asignar una ventana de confirmacion
          const confirmacionParaEliminar = window.confirm(`Borrar la receta ${receta.nombre_del_postre} con id: ${receta.id}`)
          if (confirmacionParaEliminar === true){
            eliminarRecetaApi(receta.id)
          } else {
            console.log('eliminacion de la receta cancelada')
          }
        }
      })
      setListaDeRecetas(nuevaLista);
      setEliminarReceta("");
    } else {
      console.log("no puede dejar campos vacios");
    }
  };
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
