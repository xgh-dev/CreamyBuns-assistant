import { RecetarioContext } from "../contextos/RecetarioContext";
import { useContext, useState, useEffect } from "react";
import { ContenedorDeFormulario,ContenedorDeEtiquetasForm,Formulario,Input,InputSubmit,Label,InputFile } from "./FormsRecetario.styled.js";

const FormAgregarReceta = () => {
  //uso de contexto
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    nuevaRecetaApi,
    Receta,
  } = useContext(RecetarioContext);

  //hook para capturar los datos
  const [nuevaReceta, setNuevaReceta] = useState({
    id:
    listaDeRecetas.length > 0 ? listaDeRecetas[listaDeRecetas.length - 1].id + 1 : 1, //le sumamos uno para que arranque con un valor mayor al ultimo de la lista
      //agregamos un condicional para proteger el renderizado del componente, deberemos ajustar el condicional para que evalue si hay un error, envez de que evalue con 0
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
      nuevaRecetaApi(nuevaReceta);
      //console.log(nuevaReceta);
      setListaDeRecetas([
        ...listaDeRecetas,
        new Receta(
          nuevaReceta.id,
          nuevaReceta.nombre_del_postre,
          nuevaReceta.precio,
          nuevaReceta.ingredientes,
          nuevaReceta.procedimiento,
          nuevaReceta.observaciones,
          nuevaReceta.imagen
        ),
      ]);
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
      <ContenedorDeFormulario>
        <Formulario
          action=""
          onSubmit={handleFormAgregarReceta}
         
        >
          <ContenedorDeEtiquetasForm>
            <Label>Nombre de la receta</Label>
            <Input
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
          </ContenedorDeEtiquetasForm>
          <ContenedorDeEtiquetasForm>
            <Label>Ingredientes</Label>
            <textarea
              placeholder="Ingresar ingredientes"
              rows="5" // Controla el tamaño inicial
              value={nuevaReceta.ingredientes}
              onChange={(e) =>
                setNuevaReceta({ ...nuevaReceta, ingredientes: e.target.value })
              }
            />
          </ContenedorDeEtiquetasForm>
          <ContenedorDeEtiquetasForm>
            <Label>Procedimiento</Label>
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
          </ContenedorDeEtiquetasForm>
          <ContenedorDeEtiquetasForm>
            <Label>Observaciones</Label>
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
          </ContenedorDeEtiquetasForm>
          <ContenedorDeEtiquetasForm>
            <Label>Precio</Label>
            <Input
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
          </ContenedorDeEtiquetasForm>
          <ContenedorDeEtiquetasForm>
            <Label>Cargar imagen</Label>
            <InputFile
              type="file"
              placeholder="Cargue la receta (imagen)"
              className="inputCapturadorDeArchivos"
              //value={nuevaReceta.imagen}
              onChange={(e) => {
                const file = e.target.files[0];
                setNuevaReceta({ ...nuevaReceta, imagen: file });
              }}
            />
          </ContenedorDeEtiquetasForm>
          <InputSubmit type="submit" value="Agregar" />
        </Formulario>
        {error ? <p>No pueden quedar campos vacios</p> : ""}
      </ContenedorDeFormulario>
    </>
  );
};

export default FormAgregarReceta;
