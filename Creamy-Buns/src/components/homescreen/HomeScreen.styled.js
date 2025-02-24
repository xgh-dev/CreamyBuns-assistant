import styled from "styled-components";
import imagenPedidos from "../../assets/imagenPedidos.png";
import imagenRecetario from "../../assets/imagenRecetario.png";

export const CardRecetario = styled.div`
  background-image: url(${imagenRecetario});
  background-size: cover; /* Asegura que la imagen cubra todo el área del contenedor */
  background-position: center; /* Centra la imagen */
  width: 300px;
  height: 350px;
  border-radius: 30px;
`;

export const CardPedidos = styled.div`
  background-image: url(${imagenPedidos});
  background-size: cover; /* Asegura que la imagen cubra todo el área del contenedor */
  background-position: center; /* Centra la imagen */
  width: 300px;
  height: 350px;
  border-radius: 30px;

`;

export const BodyCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  overflow-y: auto; /* Barra de desplazamiento vertical */
  height: 80vh; /* Limita la altura al 80% del viewport */
  max-height: 80vh; /* Limita la altura máxima al 80% del viewport */
  padding: 10px;
  flex: 1;
`;

export const Header = styled.header`
  text-align: center;
`
export const Titulo = styled.h1`
  font-size: 2.5rem; /* Tamaño grande para destacar */
  font-weight: bold; /* Negrita */
  color: #333; /* Color oscuro pero no completamente negro */
  text-align: center; /* Centrado */
  text-transform: uppercase; /* Convertir texto a mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
  margin: 20px 0; /* Espaciado superior e inferior */
  padding: 10px; /* Espaciado interno */

`