import Modal from "./Modal";
import { useState } from "react";

const ModalAgregarPedido = ({ clientes, recetas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({ receta: "", cliente: "" ,cantidad:"1"});

  //crear la función que manipule los datos y reestablezca el formulario
  const crearPedido = () => {
    if (newTicket.cliente !== '' && newTicket.receta !== ''){
      console.log(newTicket)
    }
    //limpiamos el estado
    setNewTicket({ ...newTicket, receta: "", cliente: "" });
  };

  return (
    <>
      {/* en este elemento solo se mostrara el boton de abrir el modal para cambiar el estado de isOpen */}
      <button onClick={() => setIsOpen(true)}>Crear Pedido</button>
      {/* el modal no se mostrara mientras isOpen sea false*/}
      <Modal isOpen={isOpen}>
        {/* aqui ira el render de la lista de inputs */}
        <h1>Crear pedido</h1>
        <div className="formContainer">
          <form action="formAgregarPedido">
            <label htmlFor="seleccionarCliente">Selecione un cliente</label>
            <select name="clientes" id="seleccionarCliente" value={newTicket.cliente} onChange={e => setNewTicket({...newTicket,cliente:e.target.value})}>
              <option value="" disabled>
                Selecciona un cliente
              </option>
              {clientes.map((cliente) => (
                <option key={cliente.retornarId()} value={cliente.retornarId()}>
                  {cliente.retornarDatos().nombre}{" "}
                  {cliente.retornarDatos().apellidos}
                </option>
              ))}
            </select>
            <div>
            <label htmlFor="seleccionarReceta">Selecione una receta</label>
            <select name="recetas" id="seleccionarReceta" value={newTicket.receta} onChange={e => setNewTicket({...newTicket,receta:e.target.value})}>
              <option value="" disabled>
                Selecciona una receta
              </option>
              {recetas.map((receta) => (
                <option
                  key={receta.retornarDatos().id}
                  value={receta.retornarDatos().id}
                >
                  {receta.retornarDatos().nombre}
                </option>
              ))}
            </select>
            <select name="cantidad" id="cantidad" value={newTicket.cantidad} onChange={e => setNewTicket({...newTicket,cantidad:e.target.value})}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            </div>
          </form>
          <div>
            <button className="agregarInput">+</button>
          </div>
          <div>
            <button onClick={crearPedido}>Guardar</button>
            <button onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAgregarPedido;
