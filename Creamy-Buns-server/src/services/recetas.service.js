//definir la consulta o servicio que se conecta a la base de datos
import conexion from "../config/database.js";

export async function obtenerRecetasDB() {
  console.log("conectando con el servicio");
  try {
    const datos = conexion.query("SELECT * FROM recetas");
    return datos;
  } catch (error) {
    console.error("error al obtener los datos de la base de datos", datos);
  }
}

export async function crearRecetaDB(datos) {
  console.log("conectando con el servicio para crear receta");
  //desestructuraremos los datos
  const {
    nombre_del_postre,
    precio,
    ingredientes,
    procedimiento,
    observaciones,
    imagen,
  } = datos;
  try {
    await conexion.query(
      "INSERT INTO recetas (nombre_del_postre,precio,ingredientes,procedimiento,observaciones,imagen) VALUES (?,?,?,?,?,?)",
      [
        nombre_del_postre,
        precio,
        ingredientes,
        procedimiento,
        observaciones,
        imagen,
      ]
    );
    console.log("Receta nueva agregada");
  } catch (error) {
    console.error("error al agregar receta", error);
  }
}

export async function eliminarRecetaDB(id) {
  console.log("Accediendo al servicio de eliminar");
  try {
    const resultado = await conexion.query("DELETE FROM recetas WHERE id = ?", [
      id,
    ]);
    console.log("Receta eliminada exitosamente", resultado);
  } catch (error) {
    console.error("Error en el servicio de eliminar", error);
  }
}
