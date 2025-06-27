import styled from "styled-components"

export const ModalContainer = styled.div`
  margin: 10px auto;
  
` 

export const Header = styled.header`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding: 10px;
  //flex: 1;
  background-color: white;
`;

export const Tituloh1 = styled.h1`
  font-size: 2.5rem; /* Tamaño grande para destacar */
  font-weight: bold; /* Negrita */
  color: #333; /* Color oscuro pero no completamente negro */
  text-align: center; /* Centrado */
  text-transform: uppercase; /* Convertir texto a mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
  margin: 0; /* Espaciado superior e inferior */
  padding: 10px; /* Espaciado interno */
`;

export const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const ContenedorSecundario = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  flex: 1;
  height: 100%;
  //justify-content: space-around;
`;
