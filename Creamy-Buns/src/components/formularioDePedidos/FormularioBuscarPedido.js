import styled from "styled-components";

export const ContenedorBuscarPedido = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
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