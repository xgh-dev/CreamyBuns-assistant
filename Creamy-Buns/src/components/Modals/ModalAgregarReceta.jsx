// Crear un componente modal para agregar pedidos
import { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import { RecetarioContext } from "../contextos/RecetarioContext";

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
  const [isOpen, setIsOpen] = useState(true);

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
      setIsOpen(false)
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
      <Modal isOpen={isOpen}>
        <form style={styles.form} onSubmit={handleFormAgregarReceta}>
          <fieldset>
            <legend>Agregar nueva receta</legend>

            <div style={styles.divEtiquetas}>
              <label htmlFor="nombre" style={styles.label}>
                Nombre de la receta
              </label>
              <input
                style={styles.input}
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
            </div>

            <div style={styles.divEtiquetas}>
              <label htmlFor="ingredientes" style={styles.label}>
                Ingredientes
              </label>
              <textarea
                style={styles.textarea}
                id="ingredientes"
                placeholder="Ingresar ingredientes"
                rows="5"
                value={nuevaReceta.ingredientes}
                onChange={(e) =>
                  setNuevaReceta({
                    ...nuevaReceta,
                    ingredientes: e.target.value,
                  })
                }
              />
            </div>

            <div style={styles.divEtiquetas}>
              <label htmlFor="procedimiento" style={styles.label}>
                Procedimiento
              </label>
              <textarea
                style={styles.textarea}
                id="procedimiento"
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

            <div style={styles.divEtiquetas}>
              <label htmlFor="observaciones" style={styles.label}>
                Observaciones
              </label>
              <textarea
                style={styles.textarea}
                id="observaciones"
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

            <div style={styles.divEtiquetas}>
              <label htmlFor="precio" style={styles.label}>
                Precio
              </label>
              <input
                style={styles.input}
                id="precio"
                type="number"
                placeholder="Ingrese el precio"
                value={nuevaReceta.precio}
                onChange={(e) =>
                  setNuevaReceta({
                    ...nuevaReceta,
                    precio: e.target.value,
                  })
                }
              />
            </div>

            <div style={styles.divEtiquetas}>
              <label htmlFor="imagen" style={styles.label}>
                Cargar imagen
              </label>
              <input
                style={styles.input}
                id="imagen"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setNuevaReceta({ ...nuevaReceta, imagen: file });
                }}
              />
            </div>

            <div style={styles.divEtiquetas}>
              <input type="submit" value="Agregar" style={styles.input} />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={styles.button}
              >
                Cerrar
              </button>
            </div>

            {error && <p >No pueden quedar campos vacíos</p>}
          </fieldset>
        </form>
      </Modal>
    </>
  );
};

const styles = {
  divEtiquetas: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    fontSize: "1rem",
    color: "#333",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  textarea: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    marginBottom: "1rem",
    resize: "vertical",
  },
  button: {
    padding: "0.6rem 1.2rem",
    marginRight: "0.5rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
  },
};

export default ModalAgregarReceta;
