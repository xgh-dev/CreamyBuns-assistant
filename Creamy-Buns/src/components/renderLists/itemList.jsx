import { Link } from "react-router-dom";

const ItemList = ({ receta }) => {
  return (
    <Link to={`/receta/${receta.id}`} style={{color: 'inherit',textDecoration:'inherit' }}>
      <div className="item-container-receta">
        {/* Fotografía */}
        <img
          src={receta.imagen}
          alt={receta.nombre_del_postre}
          className="item-image-receta"
        />
        {/* Información del postre */}
        <div className="item-info-receta">
          <h2 className="item-name-receta">{receta.nombre_del_postre}</h2>
          <p className="item-price-receta">Id: {receta.id} -- Precio: ${receta.precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
