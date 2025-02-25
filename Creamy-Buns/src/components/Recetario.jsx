import FormRecetario from "./formulariosDeRecetas/FormRecetario";
import ListaDeRecetas from "./renderLists/ListaDeRecetas";
import { RecetarioContextProvider } from "./contextos/RecetarioContext";
import {
  EstructuraDeRecetario,
  Header,
  Titulo,
  ContentContainer,
  ContentSection,
} from "./Recetario.styled.js";

const Recetario = () => {
  return (
    <>
      <EstructuraDeRecetario>
        <Header>
          <Titulo>Recetario</Titulo>
        </Header>
        <RecetarioContextProvider>
          <ContentContainer>
            <ContentSection>
              <FormRecetario />
            </ContentSection>
            <ContentSection>
              <ListaDeRecetas />
            </ContentSection>
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
