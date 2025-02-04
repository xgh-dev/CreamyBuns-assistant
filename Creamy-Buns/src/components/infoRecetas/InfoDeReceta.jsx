import { useParams } from "react-router-dom";
import { useObtenerRecetaPorID } from "../../apiAcces";

const InfoDeReceta = () => {
  const { id } = useParams();
  //desestruturaremos los hooks de la consulta para poder apoyarnos de estos
  const { isLoading, error, datos } = useObtenerRecetaPorID(id); //mandar un condicional
  // para no tener multiples ejecuciones
  let ingredientes = [] //lista que mandaremos al html
  if (isLoading == false) {
    let ingrediente = '' //esta variable crea el string de un ingrediente y la manda a la variable de la lista
    let llave = 0 //para poder incrementar este contador lo declaramos afuera del for y dentro del for lo incrementamos, para que con cada iteracion este se incremente 
    for (let index = 0; index < datos.ingredientes.length; index++) {
      if (datos.ingredientes[index] !== '\r'){
        //console.log(datos.ingredientes[index])//hasta aqui nos imprime cada elemento del string
        ingrediente = ingrediente + datos.ingredientes[index]
      } else {
        //console.log('ejecutando else')
        llave = llave + 1
        ingredientes.push(<li key={llave} className="ingrediente-item">{ingrediente}</li>)
        ingrediente = ''
      }
    }
  }
  //console.log(ingredientes)


  return (
    <>
      {error ? <p>Hay un error en la conexion</p> : ""}
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
                    {ingredientes}
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
