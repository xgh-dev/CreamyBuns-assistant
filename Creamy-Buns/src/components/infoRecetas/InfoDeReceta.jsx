import { useParams } from "react-router-dom";
import { useObtenerRecetaPorID } from "../../apiAcces";
import { ContenedorDeInfoDeReceta,ContenedorDeImagen,Header,ImagenPosicion,Main,Section,SectionSubTitulo, SectionTitulo,Tituloh1,Tituloh2,Ul,Ol } from "./InfoDeReceta.styled.js";

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
    if (datos.ingredientes[datos.ingredientes.length - 1] != '\n'){
      datos.ingredientes = datos.ingredientes.concat('\n');
      //concat es un metodo de lista por lo tanto nos retorna una lista nueva y por lo tanto esta lista debemos guardarla en algun lugar, este lugar siendo el mismo lugar de donde surge la lista
    }
    if (datos.procedimiento[datos.procedimiento.length - 1] != '\n'){
      datos.procedimiento = datos.procedimiento.concat('\n');
    }
    if (datos.observaciones[datos.observaciones.length - 1] != '\n'){
      datos.observaciones = datos.observaciones.concat('\n');
    }

    let ingrediente = ""; //esta variable crea el string de un ingrediente y la manda a la variable de la lista
    let llave = 0; //para poder incrementar este contador lo declaramos afuera del for y dentro del for lo incrementamos, para que con cada iteracion este se incremente
    for (let index = 0; index < datos.ingredientes.length; index++) {
      if (datos.ingredientes[index] !== "\n") {
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
      if (datos.procedimiento[index] !== "\n") {
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
      if (datos.observaciones[index] !== "\n") {
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
          <ContenedorDeInfoDeReceta >
            <Header className="headerInfoDeReceta">
              <Tituloh1 className="tituloInfoDeReceta">{datos.nombre_del_postre}</Tituloh1>
              <Tituloh2 className="autorInfoDeReceta">by Beli</Tituloh2>
            </Header>
            <Main className="mainContentInfoDeReceta">
              <ContenedorDeImagen className="imagen-contenedor">
                <ImagenPosicion
                  className="imagen-superior"
                  src={datos.secure_url}
                  alt="Descripción de la imagen"
                />
              </ContenedorDeImagen>
              <Section className="ingredientes-section">
                <SectionTitulo className="section-title">Ingredientes</SectionTitulo>
                <article className="ingredientes-article">
                  <Ul className="ingredientes-list">{ingredientes}</Ul>
                </article>
              </Section>
              <Section className="procedimiento-section">
                <SectionTitulo className="section-title">Procedimiento</SectionTitulo>
                <Ol className="procedimiento-list">{procedimiento}</Ol>
              </Section>
              <Section className="observaciones-section">
                <SectionTitulo className="section-title">Observaciones</SectionTitulo>
                <Ul className="observaciones-text">{observaciones}</Ul>
              </Section>
              <Section>
                <SectionTitulo className="section-title">Precio: {datos.precio}$</SectionTitulo>
              </Section>
            </Main>
          </ContenedorDeInfoDeReceta>
        </>
      )}
    </>
  );
};

export default InfoDeReceta;
