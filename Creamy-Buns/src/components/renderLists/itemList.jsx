import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = ({ receta }) => {
  //hacemos un hook que trabaje con el url que este en el atributo imagen
  const [imagenURL, setImagenURL] = useState("");

  //creamos un useEffect que funcione como filtro para transformar los datos blob en url
  useEffect(() => {
    if (receta.imagen instanceof Blob) {
      //transformamos el blob a url
      const url = URL.createObjectURL(receta.imagen);
      //seteamos la url
      setImagenURL(url);
      // Liberar la memoria asociada a la URL cuando el componente se desmonte
      return () => URL.revokeObjectURL(url);
    } else {
      setImagenURL(receta.imagen);
    }
  }, [receta.imagen]);

  return (
    <Link
      to={`/receta/${receta.id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div className="item-container-receta">
        {/* Fotografía */}
        <img
          src={imagenURL}
          alt={receta.nombre_del_postre}
          className="item-image-receta"
        />
        {/* Información del postre */}
        <div className="item-info-receta">
          <h2 className="item-name-receta">{receta.nombre_del_postre}</h2>
          <p className="item-price-receta">Precio: ${receta.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
