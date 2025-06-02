import FormRecetario from "./formulariosDeRecetas/FormRecetario";
import ListaDeRecetas from "./renderListRecetas/ListaDeRecetas";

import {
  EstructuraDeRecetario,
  Header,
  Titulo,
  ContentContainer,
  ContentSectionForm,
  ContentSectionList,
  ModalContainer
} from "./Recetario.styled.js";
import ModalAgregarReceta from "./Modals/ModalAgregarReceta.jsx";

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
        <ModalContainer>
          <ModalAgregarReceta/>
        </ModalContainer>
      </EstructuraDeRecetario>
    </>
  );
};



export default Recetario;

/* 
          <button onClick={() => {console.log('boton de agregar funcionando')}}>Agregar receta</button>
*/