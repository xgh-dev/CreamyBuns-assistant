import { RecetarioContext } from "../contextos/RecetarioContext";
import { useContext, useState, useEffect } from "react";

const FormAgregarReceta = () => {
  //uso de contexto
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    nuevaRecetaApi,
  } = useContext(RecetarioContext);

  //hook para capturar los datos
  const [nuevaReceta, setNuevaReceta] = useState({
    id: listaDeRecetas[listaDeRecetas.length - 1].id + 1, //le sumamos uno para que arranque con un valor mayor al ultimo de la lista
    nombre_del_postre: "",
    ingredientes: "",
    procedimiento: "",
    observaciones: "",
    imagen: null,
    precio: "",
  });
  //hook para proteger de errores
  const [error, setError] = useState(false);

  //funcion que agregue los datos
  const handleFormAgregarReceta = (e) => {
    e.preventDefault(); //sin esto crearemos renderizados innecesarios
    setError(false);
    //para validar varias variables con un every y acortar las lineas de codigo metemos las variables en una lista y esa lista la evaluamos con every
    if (
      [
        nuevaReceta.nombre_del_postre,
        nuevaReceta.ingredientes,
        nuevaReceta.procedimiento,
      ].every((value) => value !== "")
    ) {
      //api de agregar receta
      nuevaRecetaApi(nuevaReceta)
      //console.log(nuevaReceta);
      setListaDeRecetas([...listaDeRecetas, nuevaReceta]);
      setNuevaReceta({
        id: nuevaReceta.id + 1, //de esta forma actualizamos el id, funciona llamando al id existente e incrementando en 1, esto para que cuando vuelva a ser llamado ya exista un nuevo valor de id, esta variable no es modificada en ningun momento por el formulario
        nombre_del_postre: "",
        ingredientes: "",
        procedimiento: "",
        observaciones: "",
        imagen: null,
        precio: "",
      });
    } else {
      setError(true);
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
          onSubmit={handleFormAgregarReceta}
          className="formularioRecetas"
        >
          <div>
            <label>Nombre de la receta</label>
            <input
              type="text"
              placeholder="Ingresar nuevo nombre"
              value={nuevaReceta.nombre_del_postre}
              onChange={(e) =>
                setNuevaReceta({
                  ...nuevaReceta,
                  nombre_del_postre: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Ingredientes</label>
            <textarea
              placeholder="Ingresar ingredientes"
              rows="5" // Controla el tamaño inicial
              value={nuevaReceta.ingredientes}
              onChange={(e) =>
                setNuevaReceta({ ...nuevaReceta, ingredientes: e.target.value })
              }
            />
          </div>
          <div>
            <label>Procedimiento</label>
            <textarea
              placeholder="Ingresar procedimiento"
              rows="5"
              value={nuevaReceta.procedimiento}
              onChange={(e) =>
                setNuevaReceta({
                  ...nuevaReceta,
                  procedimiento: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Observaciones</label>
            <textarea
              placeholder="Campo opcional"
              rows="5"
              value={nuevaReceta.observaciones}
              onChange={(e) =>
                setNuevaReceta({
                  ...nuevaReceta,
                  observaciones: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Precio</label>
            <input
              type="number"
              placeholder="Ingrese el precio"
              value={nuevaReceta.precio}
              onChange={(e) =>
                setNuevaReceta({
                  ...nuevaReceta,
                  precio: Number(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label>Cargar imagen</label>
            <input
              type="file"
              placeholder="Cargue la receta (imagen)"
              className="inputCapturadorDeArchivos"
              //value={nuevaReceta.imagen}
              onChange={(e) => {
                const file = e.target.files[0];
                setNuevaReceta({ ...nuevaReceta, imagen: file });
              }}
            />
          </div>
          <input type="submit" value="Agregar" />
        </form>
        {error ? <p>No pueden quedar campos vacios</p> : ""}
      </div>
    </>
  );
};

export default FormAgregarReceta;
