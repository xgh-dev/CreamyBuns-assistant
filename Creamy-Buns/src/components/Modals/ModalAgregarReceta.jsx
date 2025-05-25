// Crear un componente modal para agregar pedidos
import { useState, useContext, useEffect } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";
import {
  ContenedorDelModal,
  Modal,
  OpenButton,
  BodyFormAgregarReceta,
  CloseButton,
} from "./Modales.styles";

//crear el elemento mediante un array function
const ModalAgregarReceta = () => {
  //uso de contexto
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    nuevaRecetaApi,
    Receta,
  } = useContext(RecetarioContext);

  //definir las variables de estado para controlar el modal
  const [isOpen, setIsOpen] = useState(false);

  //hook para capturar los datos
  const [nuevaReceta, setNuevaReceta] = useState({
    nombre: "",
    ingredientes: "",
    procedimiento: "",
    observaciones: "",
    imagen: null,
    precio: 0,
  });

  //hook para proteger de errores
  const [error, setError] = useState(false);

  //funcion que agregue los datos
  const handleFormAgregarReceta = (e) => {
    e.preventDefault(); //sin esto crearemos renderizados innecesarios
    //para eventos que partan de un formulario se usa preventDefault para evitar que se recargue la pagina
    setError(false);
    //para validar varias variables con un every y acortar las lineas de codigo metemos las variables en una lista y esa lista la evaluamos con every
    if (nuevaReceta.nombre !== "") {
      //api de agregar receta
      nuevaRecetaApi(nuevaReceta);
      //console.log(nuevaReceta);
      setListaDeRecetas([
        ...listaDeRecetas,
        new Receta(
          listaDeRecetas.length > 0
            ? listaDeRecetas[listaDeRecetas.length - 1].id + 1
            : 1,
          nuevaReceta.nombre,
          nuevaReceta.precio,
          nuevaReceta.ingredientes,
          nuevaReceta.procedimiento,
          nuevaReceta.observaciones,
          nuevaReceta.imagen
        ),
      ]);
      setNuevaReceta({
        nombre: "",
        ingredientes: "",
        procedimiento: "",
        observaciones: "",
        imagen: null,
        precio: 0,
      });
      //cerramos el modal
      //setIsOpen(false);
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
      {isOpen ? (
        <ContenedorDelModal className="ModalgregarReceta">
          <Modal>
            <form onSubmit={handleFormAgregarReceta}>
              <BodyFormAgregarReceta>
                <legend >Agregar nueva receta</legend>
                <label htmlFor="nombre">Nombre de la receta</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Ingresar nuevo nombre"
                  value={nuevaReceta.nombre}
                  onChange={(e) =>
                    setNuevaReceta({
                      ...nuevaReceta,
                      nombre: e.target.value,
                    })
                  }
                />
                <label htmlFor="ingredientes">Ingredientes</label>
                <textarea
                  id="ingredientes"
                  placeholder="Ingresar ingredientes"
                  rows="4"
                  value={nuevaReceta.ingredientes}
                  onChange={(e) =>
                    setNuevaReceta({
                      ...nuevaReceta,
                      ingredientes: e.target.value,
                    })
                  }
                />
                <label htmlFor="procedimiento">Procedimiento</label>
                <textarea
                  id="procedimiento"
                  placeholder="Ingresar procedimiento"
                  rows="4"
                  value={nuevaReceta.procedimiento}
                  onChange={(e) =>
                    setNuevaReceta({
                      ...nuevaReceta,
                      procedimiento: e.target.value,
                    })
                  }
                />
                <label htmlFor="observaciones">Observaciones</label>
                <textarea
                  id="observaciones"
                  placeholder="Campo opcional"
                  rows="4"
                  value={nuevaReceta.observaciones}
                  onChange={(e) =>
                    setNuevaReceta({
                      ...nuevaReceta,
                      observaciones: e.target.value,
                    })
                  }
                />
                <label htmlFor="precio">Precio</label>
                <input
                  id="precio"
                  type="number"
                  placeholder="0"
                  value={nuevaReceta.precio}
                  onChange={(e) =>
                    setNuevaReceta({
                      ...nuevaReceta,
                      precio: e.target.value,
                    })
                  }
                />
                <label htmlFor="imagen">Cargar imagen</label>
                <input
                  id="imagen"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setNuevaReceta({ ...nuevaReceta, imagen: file });
                  }}
                />
                <input type="submit" value="Agregar" />
                <button type="button" onClick={() => setIsOpen(false)}>
                  Cerrar
                </button>
                {error && <p>No pueden quedar campos vacíos</p>}
              </BodyFormAgregarReceta>
            </form>
          </Modal>
        </ContenedorDelModal>
      ) : (
        <OpenButton onClick={() => setIsOpen(true)}>Agregar Receta</OpenButton>
      )}
    </>
  );
};

export default ModalAgregarReceta;
