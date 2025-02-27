import { styled } from "styled-components";

export const EstructuraFormRecetario = styled.div`
  padding: 15px;
  width: 100%; /* Asegura que el formulario ocupe todo el ancho disponible en pantallas pequeñas */
`;

export const ContenedorDeTipoDeFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContenedorDeEtiquetasDeTipoDeFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;

export const Select = styled.select`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Option = styled.option`
  padding: 10px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  border: none;
`;
