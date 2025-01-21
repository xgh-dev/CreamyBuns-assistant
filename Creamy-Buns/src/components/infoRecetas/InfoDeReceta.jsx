import { useParams } from "react-router-dom";
import {  useObtenerRecetaPorID} from "../../apiAcces";

const InfoDeReceta = () => {
  const  {id} = useParams();
  //desestruturaremos los hooks de la consulta para poder apoyarnos de estos

  
  return (
    <>
      <h2>Información</h2>
    </>
  );
};

export default InfoDeReceta;
