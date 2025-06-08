import Modal from "./Modal";
import { useState } from "react";

const ModalAgregarPedido = ({ clientes, recetas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([{ receta: "#", cantidad: "1" }]);
  const [cliente, setCliente] = useState("#");

  const agregarInput = () => {
    setInputs([...inputs, { receta: "#", cantidad: "1" }]);
    console.log("input agregado");
  };

  const crearPedido = () => {
    console.log("pedido creado",inputs);
    console.log(cliente)
    //enviar a la api
    //crearPedido(cliente,inputs)
    setInputs([{ receta: "#", cantidad: "1" }]);
    setCliente("#");
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
            <select
              name="clientes"
              className="seleccionarCliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            >
              <option value="#">Selecciona un cliente</option>
              {clientes.map((cliente) => (
                <option key={cliente.retornarId()} value={cliente.retornarId()}>
                  {cliente.retornarDatos().nombre}{" "}
                  {cliente.retornarDatos().apellidos}
                </option>
              ))}
            </select>
            {inputs.map((input, indice) => (
              <div key={indice}>
                <label htmlFor="seleccionarReceta">Selecione una receta</label>
                <select
                  name="recetas"
                  className={`seleccionarReceta`}
                  value={input.receta}
                  onChange={(e) => {
                    const marcadorInputs = [...inputs];
                    marcadorInputs[indice].receta = e.target.value;
                    setInputs(marcadorInputs);
                  }}
                >
                  <option value="#">Selecciona una receta</option>
                  {recetas.map((receta) => (
                    <option
                      key={receta.retornarDatos().id}
                      value={receta.retornarDatos().id}
                    >
                      {receta.retornarDatos().nombre}
                    </option>
                  ))}
                </select>
                <select
                  name="cantidad"
                  id={`seleccionarCantidad`}
                  value={input.cantidad}
                  onChange={(e) => {
                    const marcadorInputs = [...inputs];
                    marcadorInputs[indice].cantidad = e.target.value;
                    setInputs(marcadorInputs);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            ))}
          </form>
          <div>
            <button className="agregarInput" onClick={agregarInput}>
              +
            </button>
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
