import styled from "styled-components";

export const EstructuraDeListaDeRecetas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  //padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.header`
  text-align: center;
`;

export const TituloH2 = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin: 0px;
`;

export const ContenedorDeListaDeRecetas = styled.div`
  display: flex;
  flex-direction: column; /* Asegura que los elementos estén en columna */
  gap: 10px;
  padding: 10px;
  max-height: 400px; /* Definimos un alto máximo para habilitar el scroll */
  overflow-y: auto; /* Permite el desplazamiento vertical si el contenido excede el contenedor */
`;

