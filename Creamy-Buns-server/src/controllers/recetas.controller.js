//aqui definiremos el comportamiento de la funcion relacionada a la ruta perzonalizada de cada consulta y la conectaremos con el servicio que se comunica con la base de datos

import {
  obtenerRecetasDB,
  crearRecetaDB,
  eliminarRecetaDB,
  obtenerRecetaPorIdDB,
} from "../services/recetas.service.js";

export const obtenerRecetasController = async (req, res) => {
  try {
    const [recetas] = await obtenerRecetasDB();
    res.status(200).json(recetas);
  } catch (error) {
    console.error("error en consulta", error);
  }
};

export const agregarNuevaRecetaController = async (req, res) => {
  try {
    // Extraer los datos del formulario del cuerpo de la solicitud
    const { nombre_del_postre, precio, ingredientes, procedimiento, observaciones } = req.body;

    // Validar si el archivo existe en la solicitud
    if (!req.files || !req.files.imagen) {
      return res.status(400).json({ message: "El archivo de imagen es obligatorio." });
    }

    // Extraer el archivo del `FormData` como está
    const imagenBlob = req.files.imagen.data; // Aquí obtenemos directamente el buffer del archivo

    // Preparar los datos para la base de datos
    const nuevaReceta = {
      nombre_del_postre,
      precio,
      ingredientes,
      procedimiento,
      observaciones,
      imagen: imagenBlob, // Enviar directamente el BLOB al servicio
    };

    // Llamar al servicio que guarda los datos en la base de datos
    await crearRecetaDB(nuevaReceta);

    console.log("Receta creada exitosamente");
    return res.status(201).json({
      message: "Receta creada exitosamente",
      data: nuevaReceta,
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
    console.log("conectando con el servicvio de eliminar receta");
    return res.status(200).json({ message: "receta eliminada correctamente" });
  } catch (error) {
    console.error("erro en el controlador de eliminar receta", error);
  }
};

export const obtenerRecetaPorIdController = async (req, res) => {
  try {
    const [respuesta] = await obtenerRecetaPorIdDB(req.params.id);
    res.status(200).json(respuesta);
  } catch (error) {
    console.error("error en el controlador de obtencion de recetas por id", error);
  }

};
