import { RecetarioContext } from "../contextos/RecetarioContext";
import { useContext, useState, useEffect } from "react";

const FormAgregarReceta = () => {
  const { listaDeRecetas,setListaDeRecetas,recetas} = useContext(RecetarioContext);
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [procedimiento, setProcedimiento] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [nuevoFile, setNuevoFile] = useState("");
  const [precio,setPrecio] = useState('')
  const [error, setError] = useState(false);
  
  const handleFormAgregarReceta = (e) => {
    e.preventDefault(); //sin esto crearemos renderizados innecesarios
    setError(false);
    //para validar varias variables con un every y acortar las lineas de codigo metemos las variables en una lista y esa lista la evaluamos con every
    if ([nombre, ingredientes, procedimiento].every((value) => value !== "")) {
      //para que se pueda renderizar debemos guardar en este bloque de codigo los datos en una variable y la variable concatenarla a la lista y enviarla al set para poder generar la lista
      const nuevaRecetaTemporal = {
        id: listaDeRecetas.length + 1,
        nombre_postre: nombre,
        ingredientes,
        metodo_preparacion: procedimiento,
        observaciones,
        imagen: nuevoFile,
        precio,
      };
      setListaDeRecetas([...listaDeRecetas,nuevaRecetaTemporal])
      //console.log(nuevaReceta);
      setNombre("");
      setIngredientes("");
      setProcedimiento("");
      setObservaciones("");
      setNuevoFile("");
      setPrecio('')
    } else {
      setError(true);
    }
  };

  /*
  useEffect(() => {
    if (nuevaReceta) {
      console.log(nuevaReceta);
    }
  }, [nuevaReceta]);*/

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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label>Ingredientes</label>
            <textarea
              placeholder="Ingresar ingredientes"
              rows="5" // Controla el tamaño inicial
              value={ingredientes}
              onChange={e => setIngredientes(e.target.value)}
            />
          </div>
          <div>
            <label>Procedimiento</label>
            <textarea placeholder="Ingresar procedimiento" rows="5" value={procedimiento} onChange={e => setProcedimiento(e.target.value)}/>
          </div>
          <div>
            <label>Observaciones</label>
            <textarea placeholder="Campo opcional" rows="5" value={observaciones} onChange={e => setObservaciones(e.target.value)}/>
          </div>
          <div>
            <label>Precio</label>
            <input type="number" placeholder="Ingrese el precio" value={precio} onChange={e => setPrecio(Number(e.target.value))}/>
          </div>
          <div>
            <label>Cargar imagen</label>
            <input
              type="text"
              placeholder="Cargue la receta (imagen)"
              value={nuevoFile}
              onChange={(e) => setNuevoFile(e.target.value)}
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
