import FormRecetario from "./formulariosDeRecetas/FormRecetario";
import ListaDeRecetas from "./renderLists/ListaDeRecetas";

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
          <ContentContainer>
            <ContentSectionForm>
              <FormRecetario />
            </ContentSectionForm>
            <ContentSectionList>
              <ListaDeRecetas />
            </ContentSectionList>
          </ContentContainer>
      </EstructuraDeRecetario>
    </>
  );
};

export default Recetario;

