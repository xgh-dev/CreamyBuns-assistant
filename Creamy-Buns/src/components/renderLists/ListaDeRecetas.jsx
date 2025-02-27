import { useContext } from "react";
import ItemList from "./itemList";
import { RecetarioContext } from "../contextos/RecetarioContext";
import { EstructuraDeListaDeRecetas,Header,TituloH2,ContenedorDeListaDeRecetas } from "./ListaDeRecetas.styled.js";

const ListaDeRecetas = () => {
  const { listaDeRecetas } = useContext(RecetarioContext);

  return (
    <>
      <EstructuraDeListaDeRecetas >
        <Header >
          <TituloH2>Lista de recetas</TituloH2>
        </Header>
        <ContenedorDeListaDeRecetas >
          {listaDeRecetas.map((receta) => (
            <ItemList key={receta.retornarDatos().id} receta={receta} />
          ))}
        </ContenedorDeListaDeRecetas>
      </EstructuraDeListaDeRecetas>
    </>
  );
};

export default ListaDeRecetas;

/*
Consideraciones importantes
si al usar el metodo map, despues de la flecha que se asigna despues de la variable que se define como elemento iterable si ponemos {} no nos renderizara lo deseado a menos que utilizamos un return por que estas llaves indican que es un bloque de codigo y este espera que se le retorne algo, por eso si queremos renderizar algo sin la necesidad de alguna condicion no agregaremos nada despues de la flecha => solo el elemento a renderizar

*/
