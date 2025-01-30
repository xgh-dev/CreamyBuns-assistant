import { useParams } from "react-router-dom";
import { useObtenerRecetaPorID } from "../../apiAcces";

const InfoDeReceta = () => {
  const { id } = useParams();
  //desestruturaremos los hooks de la consulta para poder apoyarnos de estos
  const { isLoading, error, datos } = useObtenerRecetaPorID(id); //mandar un condicional para no tener multiples ejecuciones
  if (isLoading == false) {
    console.log(datos);
    //console.log(datos.imagen)
  }
  return (
    <>
      {isLoading ? (
        <h1>Cargando datos</h1>
      ) : (
        <>
          <div className="bodyInfoDeReceta">
            <header className="headerInfoDeReceta">
              <h1 className="tituloInfoDeReceta">{datos.nombre_del_postre}</h1>
              <h2 className="autorInfoDeReceta">by Beli</h2>
            </header>
            <main className="mainContentInfoDeReceta">
              <div className="imagen-contenedor">
                <img
                  className="imagen-superior"
                  src={datos.imagen}
                  alt="Descripción de la imagen"
                />
              </div>
              <section className="ingredientes-section">
                <h3 className="section-title">Ingredientes</h3>
                <article className="ingredientes-article">
                  <h4 className="sub-title">Base</h4>
                  <ul className="ingredientes-list">
                    <li className="ingrediente-item">ingrediente 1</li>
                    <li className="ingrediente-item">ingrediente 2</li>
                    <li className="ingrediente-item">ingrediente 3</li>
                    <li className="ingrediente-item">ingrediente 4</li>
                    <li className="ingrediente-item">ingrediente 5</li>
                  </ul>
                </article>
              </section>
              <section className="procedimiento-section">
                <h3 className="section-title">Procedimiento</h3>
                <ol className="procedimiento-list">
                  <li className="procedimiento-item">paso</li>
                  <li className="procedimiento-item">paso</li>
                  <li className="procedimiento-item">paso</li>
                  <li className="procedimiento-item">paso</li>
                  <li className="procedimiento-item">paso</li>
                </ol>
              </section>
              <section className="observaciones-section">
                <h3 className="section-title">Observaciones</h3>
                <p className="observaciones-text">
                  - consejo - consejo - consejo
                </p>
              </section>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default InfoDeReceta;
