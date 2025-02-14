import { useParams } from "react-router-dom";
import { useObtenerRecetaPorID } from "../../apiAcces";

const InfoDeReceta = () => {
  const { id } = useParams();
  //desestruturaremos los hooks de la consulta para poder apoyarnos de estos
  const { isLoading, error, datos } = useObtenerRecetaPorID(id); //mandar un condicional
  // para no tener multiples ejecuciones
  let ingredientes = []; //lista que mandaremos al html
  let procedimiento = [];
  let observaciones = [];

  if (isLoading == false) {
    //de esta forma accedemos al ultimo caracter del array datos.ingredientes[datos.ingredientes.length - 1] 
    if (datos.ingredientes[datos.ingredientes.length - 1] != '\r'){
      datos.ingredientes = datos.ingredientes.concat('\r');
      //concat es un metodo de lista por lo tanto nos retorna una lista nueva y por lo tanto esta lista debemos guardarla en algun lugar, este lugar siendo el mismo lugar de donde surge la lista
    }
    if (datos.procedimiento[datos.procedimiento.length - 1] != '\r'){
      datos.procedimiento = datos.procedimiento.concat('\r');
    }
    if (datos.observaciones[datos.observaciones.length - 1] != '\r'){
      datos.observaciones = datos.observaciones.concat('\r');
    }

    let ingrediente = ""; //esta variable crea el string de un ingrediente y la manda a la variable de la lista
    let llave = 0; //para poder incrementar este contador lo declaramos afuera del for y dentro del for lo incrementamos, para que con cada iteracion este se incremente
    for (let index = 0; index < datos.ingredientes.length; index++) {
      if (datos.ingredientes[index] !== "\r") {
        //console.log(datos.ingredientes[index])//hasta aqui nos imprime cada elemento del string
        ingrediente = ingrediente + datos.ingredientes[index];
      } else {
        //console.log('ejecutando else')
        llave = llave + 1;
        ingredientes.push(
          <li key={llave} className="ingrediente-item">
            {ingrediente}
          </li>
        );
        ingrediente = "";
      }
    }

    let paso = "";
    let numeroDePaso = 0;
    for (let index = 0; index < datos.procedimiento.length; index++) {
      if (datos.procedimiento[index] !== "\r") {
        //creamos la concatenacion de cada elemento del array
        paso = paso + datos.procedimiento[index];
      } else {
        //creamos el push y receteamos la variable que creara el paso
        numeroDePaso = numeroDePaso + 1;
        procedimiento.push(<li key={procedimiento}>{paso}</li>);
        paso = "";
      }
    }
    let observacion = "";
    let numeroDeObservacion = 0;
    for (let index = 0; index < datos.observaciones.length; index++) {
      if (datos.observaciones[index] !== "\r") {
        observacion = observacion + datos.observaciones[index];
      } else {
        numeroDeObservacion = numeroDeObservacion + 1;
        observaciones.push(<li key={numeroDeObservacion}>{observacion}</li>);
        observacion = "";
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
                  <ul className="ingredientes-list">{ingredientes}</ul>
                </article>
              </section>
              <section className="procedimiento-section">
                <h3 className="section-title">Procedimiento</h3>
                <ol className="procedimiento-list">{procedimiento}</ol>
              </section>
              <section className="observaciones-section">
                <h3 className="section-title">Observaciones</h3>
                <ul className="observaciones-text">{observaciones}</ul>
              </section>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default InfoDeReceta;
