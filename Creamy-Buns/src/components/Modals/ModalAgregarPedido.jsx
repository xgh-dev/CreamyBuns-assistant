// Crear un componente modal para agregar pedidos
import { useState } from "react";

//crear el elemento mediante un array function
const AgregarResetaModal = () => {
  //definir las variables de estado para controlar el modal
  const [isOpen, setIsOpen] = useState(false);

  //definir una funcion que nos cambie los estodos del modal
  const OpenModal = () => {
    if (isOpen == false) {
      setIsOpen(true);
      console.log("modal de agregar receta abierto");
    } else if (isOpen == true) {
      setIsOpen(false);
      console.log("modal de agregar receta cerrado");
    }
  };
  //crear un elemento aidado que se retorne el cuerpo del modal
  const CuerpoDelModal = (
    <div>
      <h1>Agregar Receta</h1>
      <div>
        <label htmlFor='nombre'>Nombre de la Receta</label>
        <input type="text" placeholder="Ingresar nombre" id='nombre'/>
        <label>Precio de la Receta</label>
        <input type="number" />
      </div>
    </div>
  );

  return (
    <>
      <h1>Modal para agregar clientes</h1>
      <button onClick={OpenModal}>Agregar Receta</button>
      {isOpen ? (CuerpoDelModal):""}
    </>
  );
};

export default AgregarResetaModal;

