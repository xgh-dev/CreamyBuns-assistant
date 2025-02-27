import styled from "styled-components";

export const ItemContainerReceta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px; /* Tamaño uniforme */
  height: 120px; /* Tamaño uniforme */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 10px auto; /* Centrar horizontalmente */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {//no olvidar & para ligar el hover al propio div, si lo dejamos :hover & {} se aplica al padre 
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
`;

export const ImagenReceta = styled.img`
  width: 80px; /* Ajustar tamaño de la imagen */
  height: 80px; /* Ajustar tamaño de la imagen */
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
`;

export const InfoReceta = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Asegurar que el contenido se ajuste */
  overflow: hidden; /* Evitar que el texto se desborde */
`;

export const NombreReceta = styled.h2`
  margin: 0 0 5px 0;
  font-size: 1em;
  font-weight: bold;
  color: #333;
  white-space: nowrap; /* Evitar salto de línea */
  overflow: hidden;
  text-overflow: ellipsis; /* Agregar "..." si el texto es muy largo */
`;
export const PrecioReceta = styled.p`
  margin: 0;
  font-weight: bold;
  color: #555;
  font-size: 0.9em;
`;

