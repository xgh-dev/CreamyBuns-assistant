import {
  ContenedorPrincipal,
  Header,
  ContenedorSecundario,
  ContenedorDeTabla,
  Tituloh1,
  ContenedorDeAgregarCliente,
} from "./Clientes.styled.js";
import ModalAgregarCliente from "./Modals/ModalAgregarCliente.jsx";
import TablaDeClientes from "./tablasClientes/TablaClientes.jsx";
import FormBuscarClientes from "./formularioDeClientes/FormBuscarClientes.jsx";


const Clientes = () => {

  //hook de la lista de los clientes
  //const [listaDeClientes,setListaDeClientes] = useState(clientes)
  
  return (
    <>
      <ContenedorPrincipal>
        <Header>
          <Tituloh1>Clientes</Tituloh1>
        </Header>
        <ContenedorSecundario>
          <FormBuscarClientes />
          <ContenedorDeTabla className="divTabla">
            <TablaDeClientes />
          </ContenedorDeTabla>
          <ContenedorDeAgregarCliente>
            <ModalAgregarCliente />
          </ContenedorDeAgregarCliente>
        </ContenedorSecundario>
      </ContenedorPrincipal>
    </>
  );
};


export default Clientes;

//tr para filas
//td para agregar una celda (columna)

/*

*/

/*
Para tabla responsiva
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
*/


/*
    display: flex
;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;

*/