import { styled } from "styled-components";

export const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  flex: 1;
  height: 100%; 
  width: 100%; 
  
`;
export const ContenedorSecundario = styled.div`
  background-color: #f4f4f4;
`;
export const Header = styled.header`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding: 10px;
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

export const ContenedorDeFormulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 15px;
  height: 100%;
  max-height: 200px; /*con esto implementamos el limite para que se active el scrollbar*/
  box-sizing: border-box;
  overflow: hidden;
`;

export const ContenedorDeEtiquetasForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fafafa;
  color: #333;
  &::placeholder {
    color: #333; /* Color similar al de las etiquetas */
    font-size: 14px; /* Ajuste de tamaño de fuente similar al de las etiquetas */
    font-weight: normal; /* No negrita, para diferenciar el placeholder del texto */
  }
`;

export const InputSubmit = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #bd8750;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  &:hover {
    background-color: #9e7237;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 100%;
  //padding: 15px;
  /*background-color: #fff;
  border: 1px solid #eee;*/
  border-radius: 6px;
  //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 300px;
`;

export const ContenedorDeTabla = styled.div`
  max-height: 61vh;
  overflow: auto;
  //max-height: 66vh;
`;


export const ContenedorDeAgregarCliente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
