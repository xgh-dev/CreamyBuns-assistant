
import {
  obtenerRecetasDB,
  crearRecetaDB,
  eliminarRecetaDB,
  obtenerRecetaPorIdDB,
} from "../services/recetas.service.js";

export const obtenerRecetasController = async (req, res) => {
  try {
    const [recetas] = await obtenerRecetasDB();
    //console.log(recetas[0]) de esta manera regresamos los objetos, sin ser parte de una lista
    //console.log(recetas)
    res.status(200).json(recetas);
  } catch (error) {
    console.error("error en consulta", error);
  }
};

export const agregarNuevaRecetaController = async (req, res) => {
  try {
    //console.log("datos de la request", req.body);
    // Llamar al servicio que guarda los datos en la base de datos
    await crearRecetaDB(req.body);
    //console.log("Receta creada exitosamente");
    //returnamos como respuesta un json con la informacion cargada
    return res.status(201).json({
      message: "Receta creada exitosamente",
      data: req.body,
    });
  } catch (error) {
    console.error("Error en el controlador de agregar nueva receta", error);
    return res.status(500).json({
      message: "Error al agregar la receta",
      error,
    });
  }
};

export const eliminarRecetaController = async (req, res) => {
  try {
    await eliminarRecetaDB(req.params.id);
    //console.log("conectando con el servicvio de eliminar receta");
    res.status(200).json({ message: "receta eliminada correctamente" });
  } catch (error) {
    console.error("erro en el controlador de eliminar receta", error);
  }
};

export const obtenerRecetaPorIdController = async (req, res) => {
  try {
    const [respuesta] = await obtenerRecetaPorIdDB(req.params.id);
    res.status(200).json(respuesta);
  } catch (error) {
    console.error(
      "error en el controlador de obtencion de recetas por id",
      error
    );
  }
};
