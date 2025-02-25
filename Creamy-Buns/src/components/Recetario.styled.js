import styled from "styled-components";


export const EstructuraDeRecetario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex:1;
    //background-color: #f4f4f4;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    //background-color: #f4f4f4;
`

export const ContentSection = styled.section`
    background-color: #f4f4f4;
`

export const Header = styled.header`
  text-align: center;
  margin: 10px;
`

export const Titulo = styled.h1`
  font-size: 2.5rem; /* Tamaño grande para destacar */
  font-weight: bold; /* Negrita */
  color: #333; /* Color oscuro pero no completamente negro */
  text-align: center; /* Centrado */
  text-transform: uppercase; /* Convertir texto a mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
  margin: 0; /* Espaciado superior e inferior */
  padding: 10px; /* Espaciado interno */

`