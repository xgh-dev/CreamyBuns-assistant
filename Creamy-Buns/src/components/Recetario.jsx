import FormRecetario from "./formulariosDeRecetas/FormRecetario";
import ListaDeRecetas from "./renderLists/ListaDeRecetas";
import { RecetarioContextProvider } from "./contextos/RecetarioContext";
import {
  EstructuraDeRecetario,
  Header,
  Titulo,
  ContentContainer,
  ContentSectionForm,
  ContentSectionList 
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
            <ContentSectionForm>
              <FormRecetario />
            </ContentSectionForm>
            <ContentSectionList>
              <ListaDeRecetas />
            </ContentSectionList>
          </ContentContainer>
        </RecetarioContextProvider>
      </EstructuraDeRecetario>
    </>
  );
};

export default Recetario;

