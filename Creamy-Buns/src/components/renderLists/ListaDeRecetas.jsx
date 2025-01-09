import ItemList from "./itemList";

const ListaDeRecetas = () => {
  const recetas = [
    {
      id: 1,
      nombre_postre: "Tarta de Chocolate",
      ingredientes:
        "200g de chocolate, 100g de mantequilla, 3 huevos, 150g de azúcar, 100g de harina",
      metodo_preparacion:
        "1. Derretir el chocolate con la mantequilla. 2. Batir los huevos con el azúcar. 3. Mezclar todo con la harina y hornear a 180°C durante 30 minutos.",
      observaciones:
        "Dejar enfriar antes de servir. Se puede decorar con crema batida.",
      imagen: "#",
      precio: 15.99,
    },
    {
      id: 2,
      nombre_postre: "Cheesecake de Fresa",
      ingredientes:
        "500g de queso crema, 200g de galletas digestivas, 100g de mantequilla, 200g de fresas, 150g de azúcar",
      metodo_preparacion:
        "1. Triturar las galletas y mezclar con la mantequilla derretida. 2. Mezclar el queso crema con el azúcar y colocar sobre la base de galletas. 3. Decorar con fresas frescas.",
      observaciones: "Refrigerar por al menos 4 horas antes de servir.",
      imagen: "#",
      precio: 12.5,
    },
    {
      id: 3,
      nombre_postre: "Brownie de Nueces",
      ingredientes:
        "200g de chocolate, 150g de azúcar, 100g de mantequilla, 3 huevos, 150g de harina, 50g de nueces",
      metodo_preparacion:
        "1. Derretir el chocolate con la mantequilla. 2. Batir los huevos con el azúcar y mezclar con el chocolate derretido. 3. Agregar la harina y las nueces picadas, hornear a 180°C durante 25 minutos.",
      observaciones: "Se puede servir con helado de vainilla.",
      imagen: "#",
      precio: 18.75,
    },
    {
      id: 4,
      nombre_postre: "Flan Casero",
      ingredientes:
        "1 litro de leche, 6 huevos, 150g de azúcar, 1 cucharadita de esencia de vainilla",
      metodo_preparacion:
        "1. Batir los huevos con el azúcar y la esencia de vainilla. 2. Calentar la leche y mezclar con los huevos batidos. 3. Cocinar al baño maría durante 45 minutos.",
      observaciones: "Dejar enfriar completamente antes de desmoldar.",
      imagen: "#",
      precio: 8.99,
    },
    {
      id: 5,
      nombre_postre: "Galletas de Avena y Pasas",
      ingredientes:
        "200g de avena, 100g de mantequilla, 100g de azúcar, 1 huevo, 100g de pasas, 150g de harina",
      metodo_preparacion:
        "1. Mezclar la avena, el azúcar, el huevo y la mantequilla derretida. 2. Agregar las pasas y la harina. 3. Formar bolitas y hornear a 180°C durante 15 minutos.",
      observaciones: "Se pueden sustituir las pasas por chispas de chocolate.",
      imagen: "#",
      precio: 9.99,
    },
  ];

  return (
    <>
      <section className="contenedorDeRecetas">
        <h2>Lista de recetas</h2>
        <div className="contenedorDeListaDeRecetas">
          {recetas.map((receta) => (
            <ItemList key={receta.id} receta={receta} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ListaDeRecetas;

/*
Consideraciones importantes
si al usar el metodo map, despues de la flecha que se asigna despues de la variable que se define como elemento iterable si ponemos {} no nos renderizara lo deseado a menos que utilizamos un return por que estas llaves indican que es un bloque de codigo y este espera que se le retorne algo, por eso si queremos renderizar algo sin la necesidad de alguna condicion no agregaremos nada despues de la flecha => solo el elemento a renderizar

*/
