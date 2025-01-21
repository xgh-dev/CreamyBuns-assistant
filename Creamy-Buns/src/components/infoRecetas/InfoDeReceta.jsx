import { useParams } from "react-router-dom";
import {  useObtenerRecetaPorID} from "../../apiAcces";

const InfoDeReceta = () => {
  const  {id} = useParams();
  //desestruturaremos los hooks de la consulta para poder apoyarnos de estos
  const {isLoading,error,datos} = useObtenerRecetaPorID(id)
  if (isLoading == false){
    console.log(datos.nombre_del_postre)
  }
  return (
    <>
      <header className="headerInfoDereceta">
        <h1 className="tituloInfoDeReceta">Nombre del postre</h1>
        <h2 className="autorInfoDeReceta">by Beli</h2>
      </header>
      <main className="mainContentInfoDeReceta">
        <section className="ingredientes-section">
        <h3 className="section-title">Ingredientes</h3>
          <article className="ingredientes-article">
            <h4 className="sub-title">Base</h4>
            <ul className="ingredientes-list">
              <li>ingrediente 1</li>
              <li>ingrediente 2</li>
              <li>ingrediente 3</li>
              <li>ingrediente 4</li>
              <li>ingrediente 5</li>
            </ul>
          </article>
        </section>
        <section className="procedimiento-section">
          <h3 className="section-title">Procedimiento</h3>
          <ol className="procedimiento-list">
            <li>paso</li>
            <li>paso</li>
            <li>paso</li>
            <li>paso</li>
            <li>paso</li>
          </ol>
        </section>
        <section className="observaciones-section">
          <h3 className="section-title">Observaciones</h3>
          <p className="observaciones-text">
            - consejo
            - consejo
            - consejo
          </p>
        </section>
      </main>
    </>
  );
};

export default InfoDeReceta;
