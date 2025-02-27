import { styled } from "styled-components";

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

export const InputFile = styled.input`
  font-size: 14px;
  color: #333;
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

/*
<div className="formularioContenedorRecetas">
        <form onSubmit={handleFormBuscarReceta} className="formularioRecetas">
          <div>
            <label>Ingrese el nombre de la receta</label>
            <input
              type="text"
              placeholder="Nombre de la receta"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
*/
