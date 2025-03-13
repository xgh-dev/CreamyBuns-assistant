//aqui definiremos el comportamiento de la funcion relacionada a la ruta perzonalizada de cada consulta y la conectaremos con el servicio que se comunica con la base de datos
import {detectarTipoDeImagen} from '../helpers/funcionDeDeteccion.js'

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
    //reformulacion del dato imagen
    const recetasActualizacionDeDatos = recetas.map(receta => {
      if (receta.imagen != null){
        console.log('Imagen encontrada, procesando...')
        
        //Convertir el Blob en un buffer, el blob son datos binarios que viene de la base de datos
        const buffer = Buffer.from(receta.imagen); //Buffer.from convierte el blob en un buffer, que es una estrutura de datos que Node usa para manejar datos binarios
        const tipoImagen = detectarTipoDeImagen(buffer)//una vez que tengamos nuestrios datos binarios lo pasamos a la funcion para evaluar su tipo de extension

        //ahora convertimos nuestros datos binarios en una cadena de texto en forma base64
        const imagenBase64 = buffer.toString('base64')
        //ahora estructuramos la URL Base64 para que el frontend la pueda renderizar solo cargando el dato
        const imagenDataUrl = `data:${tipoImagen};base64,${imagenBase64}`;
        //ejemplo de como se veria
        // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...

        return {...receta, imagen: imagenDataUrl}
      } else {
        return receta
      }
    })

    res.status(200).json(recetasActualizacionDeDatos);
  } catch (error) {
    console.error("error en consulta", error);
  }
};

export const agregarNuevaRecetaController = async (req, res) => {
  try {
    // Extraer los datos del formulario del cuerpo de la solicitud
    const {
      nombre_del_postre,
      precio,
      ingredientes,
      procedimiento,
      observaciones,
    } = req.body;

    const nuevaReceta = {
      nombre_del_postre,
      precio,
      ingredientes,
      procedimiento,
      observaciones,
    };

    //validamos si req.files.imagen existe
    if (req.files) {
      // Extraer el archivo del `FormData` como está
      const imagenBlob = req.files.imagen.data; // Aquí obtenemos directamente el buffer del archivo
      //agregamos al objeto
      nuevaReceta.imagen = imagenBlob;
    }

    // Llamar al servicio que guarda los datos en la base de datos
    await crearRecetaDB(nuevaReceta);
    //console.log("Receta creada exitosamente");
    //returnamos como respuesta un json con la informacion cargada
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
    //console.log("conectando con el servicvio de eliminar receta");
    res.status(200).json({ message: "receta eliminada correctamente" });
  } catch (error) {
    console.error("erro en el controlador de eliminar receta", error);
  }
};

export const obtenerRecetaPorIdController = async (req, res) => {
  try {
    const [respuesta] = await obtenerRecetaPorIdDB(req.params.id);
    if (respuesta.imagen != null){
      console.log('Imagen encontrada, procesando...')
      //creamos el buffer
      const buffer = Buffer.from(respuesta.imagen);
      //extraemos el tipo de imagen
      const extension = detectarTipoDeImagen(buffer)
      //convertimos el buffer a string base4
      const imagenBase64 = buffer.toString('base64')
      //estructurar la url
      const base64Url = `data:${extension};base64,${imagenBase64}`;
      respuesta.imagen = base64Url
    }
    res.status(200).json(respuesta);
  } catch (error) {
    console.error(
      "error en el controlador de obtencion de recetas por id",
      error
    );
  }
};
