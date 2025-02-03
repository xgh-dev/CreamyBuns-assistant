import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = ({ receta }) => {
  //hacemos un hook que trabaje con el url que este en el atributo imagen
  const [imagenURL, setImagenURL] = useState("");

  // Guardamos los datos de la receta en una variable para evitar múltiples llamadas a returnarDatos()
  const datosReceta = receta.returnarDatos();
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

  return (
    <Link
      to={`/receta/${datosReceta.id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div className="item-container-receta">
        {/* Fotografía */}
        <img
          src={imagenURL}
          alt={datosReceta.nombre}
          className="item-image-receta"
        />
        {/* Información del postre */}
        <div className="item-info-receta">
          <h2 className="item-name-receta">{datosReceta.nombre}</h2>
          <p className="item-price-receta">Precio: ${datosReceta.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
