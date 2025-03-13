import styled from "styled-components";

export const ContenedorDelModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // Fondo semi-transparente
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  min-width: 300px;

  input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export const CloseButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(222, 191, 37);
  color: white;
  border-radius: 5px;
`;
export const ActualizarButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background: rgb(86, 222, 37);
  color: white;
  border-radius: 5px;
`;
export const EliminarButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background: #dc3545;
  color: white;
  border-radius: 5px;
`;

export const SaveCloseButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(24, 201, 18);
  color: white;
  border-radius: 5px;
`;

