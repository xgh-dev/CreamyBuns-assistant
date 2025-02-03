import FormRecetario from "./FormRecetario";
import ListaDeRecetas from "./renderLists/ListaDeRecetas";
import { RecetarioContextProvider } from "./contextos/RecetarioContext";
//import imagenFondoRecetario from '../assets/imagenesRecetario/imagenFondoRecetario.jpg'

const Recetario = () => {
  return (
    <>
      <section className="RecetarioMainContainer">
        <header>
          <img src="" alt="Logo" />
          <h2>Recetario</h2>
        </header>
        <RecetarioContextProvider>
          <main className="recetarioMainContent">
            <section className="mainFormRecetario">
              <FormRecetario />
            </section>
            <section className="mainListaDeRecetas">
              <ListaDeRecetas />
            </section>
          </main>
        </RecetarioContextProvider>
      </section>
    </>
  );
};

export default Recetario;

/*
 style={{
        backgroundImage: `url(${imagenFondoRecetario})`
      }}

*/