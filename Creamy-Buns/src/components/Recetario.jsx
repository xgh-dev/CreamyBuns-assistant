import FormRecetario from "./formulariosDeRecetas/FormRecetario";
import ListaDeRecetas from "./renderLists/ListaDeRecetas";
import { RecetarioContextProvider } from "./contextos/RecetarioContext";
import { EstructuraDeRecetario,Header,Titulo,ContentContainer } from "./Recetario.styled.js";

const Recetario = () => {
  return (
    <>
      <EstructuraDeRecetario>
        <Header >
          <Titulo>Recetario</Titulo>
        </Header>
        <RecetarioContextProvider>
          <ContentContainer>
            <section className="mainFormRecetario">
              <FormRecetario />
            </section>
            <section className="mainListaDeRecetas">
              <ListaDeRecetas />
            </section>
          </ContentContainer>
        </RecetarioContextProvider>
      </EstructuraDeRecetario>
    </>
  );
};

export default Recetario;

/*
 style={{
        backgroundImage: `url(${imagenFondoRecetario})`
      }}

*/
