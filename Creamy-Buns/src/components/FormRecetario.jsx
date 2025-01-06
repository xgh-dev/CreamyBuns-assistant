import { useContext, useState } from "react";
import { RecetarioContext } from "./contextos/RecetarioContext";
import FormRecetarioOption from "./formulariosDeRecetas/FormRecetarioOption";


const FormRecetario = () => {
  //llamar al contexto
  //const {} = useContext(RecetarioContext)
  const [option, setOption] = useState("buscar");
  const optionForm = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  return (
    <>
      <div className="FormRecetario">
        <div className="contenedorDeOpcionesDeFormulario">
          <div className="contenedorDeEtiquetas">
          <label htmlFor="">Seleccione una opción</label>
          <select
            name="opciones"
            id="opciones"
            value={option}
            onChange={optionForm}
          >
            <option value="buscar" id="buscar">
              Buscar
            </option>
            <option value="agregar" id="agregar">
              Agregar
            </option>
            <option value="eliminar" id="eliminar">
              Eliminar
            </option>
          </select>
          </div>
        </div>
        <FormRecetarioOption option={option} />
      </div>
    </>
  );
};

export default FormRecetario;

/*
<div className="formRecetarioContenedor">
        <div className="dropdown dropdownContainerAgregar">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Agregar receta
          </button>
          <form action="" className="dropdown-menu p-4">
            <div className="mb-3">
              <label>Nombre de la receta</label>
              <input type="text" placeholder="Agregar nombre de la receta" />
            </div>
            <div className="mb-3">
              <label>Ingredientes</label>
              <input type="text" placeholder="Agregar Ingredientes" />
            </div>
            <div className="mb-3">
              <label>Preparación</label>
              <input type="text" placeholder="agregar metodo de preparación" />
            </div>
            <div className="mb-3">
              <label>Observaciones</label>
              <input type="text" placeholder="Agregar observaciones" />
            </div>
            <input type="submit" />
          </form>
        </div>
        <div className="dropdown dropdownContainerBuscarReceta">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Buscar receta
          </button>
          <form className="dropdown-menu p-4">
            <div className="mb-3">
              <label>Buscar receta</label>
              <input type="text" placeholder="Ingrese en nombre de la receta" />
            </div>
            <input type="submit"/>
          </form>
        </div>
        <div className="dropdown dropdownContainerEliminarReceta">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Eliminar receta
          </button>
          <form className="dropdown-menu p-4">
            <div className="mb-3">
              <label >Eliminar receta</label>
              <input type="text" placeholder="Ingrese nombre de la receta"/>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
*/
