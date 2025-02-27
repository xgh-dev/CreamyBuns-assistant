import { useContext, useState } from "react";
import { RecetarioContext } from "../contextos/RecetarioContext";
import {
  ContenedorDeFormulario,
  ContenedorDeEtiquetasForm,
  Formulario,
  Input,
  InputSubmit,
  Label,
} from "./FormsRecetario.styled.js";

const FormBuscarReceta = () => {
  const {
    listaDeRecetas,
    setListaDeRecetas,
    listaDeRecetasOriginal,
    setListaDeRecetasOriginal,
  } = useContext(RecetarioContext);

  //hook para buscar receta
  const [nombre, setNombre] = useState("");

  const handleFormBuscarReceta = (e) => {
    e.preventDefault();
    setListaDeRecetasOriginal(listaDeRecetas); //creamos una copia de la lista para poder recuperarla
    if (nombre !== "") {
      setListaDeRecetas(
        listaDeRecetas.filter((receta) =>
          receta.retornarDatos().nombre.toLowerCase().includes(nombre.toLowerCase())
        )
      );
      setNombre("");
    } else {
      //en caso de que se ejecute el else renderizamos de nuevo todo
      if (listaDeRecetasOriginal.length !== listaDeRecetas.length){
        //de esta forma si las listas miden diferente podremos restaurarlas al volver a dar click
        setListaDeRecetas(listaDeRecetasOriginal);
        setNombre("");
      }
      setNombre("");
      console.log("no deje campos vacios");
    }
  };

  return (
    <>
      <ContenedorDeFormulario>
        <Formulario onSubmit={handleFormBuscarReceta} className="">
          <ContenedorDeEtiquetasForm>
            <Label>Ingrese el nombre de la receta</Label>
            <Input
              type="text"
              placeholder="Nombre de la receta"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </ContenedorDeEtiquetasForm>
          <InputSubmit type="submit" />
        </Formulario>
      </ContenedorDeFormulario>
    </>
  );
};

export default FormBuscarReceta;
