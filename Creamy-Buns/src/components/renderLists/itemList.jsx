import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ItemContainerReceta,
  ImagenReceta,
  InfoReceta,
  NombreReceta,
  PrecioReceta,
} from "./itemList.styled.js";

const ItemList = ({ receta }) => {
  //hacemos un hook que trabaje con el url que este en el atributo imagen
  const [imagenURL, setImagenURL] = useState("");

  // Guardamos los datos de la receta en una variable para evitar múltiples llamadas a returnarDatos()
  const datosReceta = receta.retornarDatos();
  //creamos un useEffect que funcione como filtro para transformar los datos blob en url
  useEffect(() => {
    if (datosReceta.imagen instanceof File) {
      //transformamos el file a url
      const url = URL.createObjectURL(datosReceta.imagen);
      //seteamos la url
      setImagenURL(url);
      // Liberar la memoria asociada a la URL cuando el componente se desmonte
      return () => URL.revokeObjectURL(url);
    } else {
      setImagenURL(datosReceta.imagen);
    }
  }, []);
  //console.log(datosReceta);
  return (
    <Link
      to={`/receta/${datosReceta.id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <ItemContainerReceta>
        {/* Fotografía */}
        <ImagenReceta src={imagenURL} alt={datosReceta.nombre} />
        {/* Información del postre */}
        <InfoReceta>
          <NombreReceta>{datosReceta.nombre}</NombreReceta>
          <PrecioReceta>Precio: ${datosReceta.precio}</PrecioReceta>
        </InfoReceta>
      </ItemContainerReceta>
    </Link>
  );
};

export default ItemList;

//className="item-container-receta"
