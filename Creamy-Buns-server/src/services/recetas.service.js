//definir la consulta o servicio que se conecta a la base de datos
import conexion from "../config/database.js";
import {destroyImage} from "../helpers/funcionesCloudinary.js";

export async function obtenerRecetasDB() {
  try {
    const datos = await conexion.query(
      `SELECT recetas.id, recetas.nombre, recetas.precio, recetas.ingredientes, recetas.procedimiento, recetas.observaciones,imagenes.secure_url, imagenes.public_id FROM recetas LEFT JOIN imagenes ON recetas.imagen = imagenes.id;`
    );
    return datos;
  } catch (error) {
    console.error("error al obtener los datos de la base de datos", error);
  }
}

export async function crearRecetaDB(datos) {
  //console.log("conectando con el servicio para crear receta");
  //desestructuraremos los datos
  const { nombre, precio, ingredientes, procedimiento, observaciones, imagen } = datos;
  //console.log('datos en el servicio',datos)
  try {
    await conexion.query(
      "INSERT INTO recetas (nombre,precio,ingredientes,procedimiento,observaciones,imagen) VALUES (?,?,?,?,?,?)",
      [nombre, precio, ingredientes, procedimiento, observaciones, imagen]
    );
    console.log("Receta nueva agregada");
  } catch (error) {
    console.error("error al agregar receta", error);
  }
}

export async function eliminarRecetaDB(id, public_id) {
  //console.log("Accediendo al servicio de eliminar");
  try {
    await conexion.query("DELETE FROM recetas WHERE id = ?", [id]);
    await destroyImage(public_id);
    console.log("Receta eliminada exitosamente");
  } catch (error) {
    console.error("Error en el servicio de eliminar", error);
  }
}

export async function obtenerRecetaPorIdDB(id) {
  //console.log("accediendo al servicio de obtencion de una receta por id");
  try {
    const [respuesta] = await conexion.query(
      "SELECT recetas.id, recetas.nombre, recetas.precio, recetas.ingredientes, recetas.procedimiento, recetas.observaciones,imagenes.secure_url FROM recetas LEFT JOIN imagenes ON recetas.imagen = imagenes.id WHERE recetas.id = ?;",
      [id]
    );
    //console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.error("Error en obtener datos del servicio", error);
  }
}
