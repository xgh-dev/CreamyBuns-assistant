import { useContext } from "react";
import ItemList from "./itemList";
import { RecetarioContext } from "../contextos/RecetarioContext";

const ListaDeRecetas = () => {
  const { listaDeRecetas } = useContext(RecetarioContext);

  return (
    <>
      <div className="contenedorDeRecetas">
        <header className="headerTituloListaDeRecetas">
          <h2>Lista de recetas</h2>
        </header>
        <div className="contenedorDeListaDeRecetas">
          {listaDeRecetas.map((receta) => (
            <ItemList key={receta.id} receta={receta} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListaDeRecetas;

/*
Consideraciones importantes
si al usar el metodo map, despues de la flecha que se asigna despues de la variable que se define como elemento iterable si ponemos {} no nos renderizara lo deseado a menos que utilizamos un return por que estas llaves indican que es un bloque de codigo y este espera que se le retorne algo, por eso si queremos renderizar algo sin la necesidad de alguna condicion no agregaremos nada despues de la flecha => solo el elemento a renderizar

*/
