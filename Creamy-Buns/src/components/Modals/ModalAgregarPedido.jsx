import { useState } from "react";
import Modal from "./Modal";

const ModalAgregarPedido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({ receta: "", cliente: "" });

  //crear la función que manipule los datos y reestablezca el formulario
  const crearPedido = () => {
    console.log(newTicket)

    //limpiamos el estado
    setNewTicket({...newTicket,receta:"",cliente:""})
  }

  return (
    <>
      {/* en este elemento solo se mostrara el boton de abrir el modal para cambiar el estado de isOpen */}
      <button onClick={() => setIsOpen(true)}>Crear Pedido</button>
      {/* el modal no se mostrara mientras isOpen sea false*/}
      <Modal isOpen={isOpen}>
        <div className="formContainer">
          <form action="formAgregarPedido">
            <label htmlFor="receta">Ingresar la receta</label>
            <input type="text" id="receta" placeholder="Ingresa la receta" value={newTicket.receta} onChange={e => setNewTicket({...newTicket,receta: e.target.value})}/>
            <label htmlFor="cliente">Ingresa el cliente</label>
            <input type="text" id="cliente" placeholder="Ingresa el cliente" value={newTicket.cliente} onChange={event => setNewTicket({...newTicket,cliente:event.target.value})}/>
          </form>
          <button onClick={crearPedido}>Guardar</button>
          <button onClick={() => setIsOpen(false)}>Cerrar</button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAgregarPedido;
