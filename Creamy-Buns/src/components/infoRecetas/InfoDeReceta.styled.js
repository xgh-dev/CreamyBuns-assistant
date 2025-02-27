import { styled } from "styled-components";

export const ContenedorDeInfoDeReceta = styled.div`
  font-family: "Georgia", serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f8f4ee; /* Color de fondo */
  color: #5a4634; /* Color principal del texto */
  max-height: 90vh;
  overflow-y: auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Tituloh1 = styled.h1`
  font-size: 2rem;
  color: #7c543c; /* Color del título principal */
  padding-top: 20px;
`;

export const Tituloh2 = styled.h2`
  font-size: 1.5rem;
  background-color: #d4b89f; /* Color de fondo del autor */
  color: #ffffff; /* Color del texto del autor */
  display: inline-block;
  padding: 5px 15px;
  border-radius: 5px;
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff; /* Color del fondo principal */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
`;

export const ContenedorDeImagen = styled.div`
  position: absolute; /* Permite posicionar el contenedor de la imagen */
  top: 20px; /* Distancia desde la parte superior del contenedor padre */
  right: 20px; /* Distancia desde el borde derecho del contenedor padre */
  width: 200px; /* Tamaño del contenedor */
  height: 200px; /* Tamaño del contenedor */
  border: 2px solid #d1d1d1; /* Borde para identificar dimensiones */
  border-radius: 10px; /* (Opcional) Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* (Opcional) Sombra para estilo */
  display: flex; /* Asegura que la imagen esté centrada dentro del contenedor */
  justify-content: center;
  align-items: center;
  background-color: #fff; /* Fondo para distinguir el contenedor */
  z-index: 1; /* Asegura que esté por encima del contenido */
`;

export const ImagenPosicion = styled.img`
  max-width: 100%; /* Escala la imagen dentro del contenedor */
  max-height: 100%; /* Asegura que la imagen no sobresalga */
  border-radius: 8px; /* (Opcional) Bordes redondeados para la imagen */
`;

export const Section = styled.section`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #7c543c; /* Color de los subtítulos */
  border-bottom: 2px solid #d4b89f; /* Línea decorativa */
  display: inline-block;
`;

export const SectionTitulo = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #7c543c; /* Color de los subtítulos */
  border-bottom: 2px solid #d4b89f; /* Línea decorativa */
  display: inline-block;
`;

export const SectionSubTitulo = styled.h4`
  font-size: 1.2rem;
  color: #7c543c; /* Color de los títulos menores */
  margin-top: 20px;
`;

export const Ul = styled.ul`
  margin-left: 20px;
  padding-left: 20px;
`;
export const Ol = styled.ol`
  margin-left: 20px;
  padding-left: 20px;
`;

/*
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

*/
