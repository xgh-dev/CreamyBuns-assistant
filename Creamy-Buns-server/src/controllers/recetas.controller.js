//aqui definiremos el comportamiento de la funcion relacionada a la ruta perzonalizada de cada consulta y la conectaremos con el servicio que se comunica con la base de datos

import { obtenerRecetasDB,crearRecetaDB,eliminarRecetaDB } from "../services/recetas.service.js";


export const obtenerRecetasController = async(req,res) =>{
    try {
        const [recetas] = await obtenerRecetasDB();
        res.status(200).json(recetas)
    } catch (error) {
        console.error('error en consulta',error)
    }
}

export const agregarNuevaRecetaController = async (req,res) => {
    try {
        await crearRecetaDB(req.body)
        //cargaremos en el body de la req la informacion
        console.log('mandando datos al servicio')
        // Responder con éxito sin modificar el body
        return res.status(201).json({
        message: "Receta creada exitosamente",
        data: req.body,
      });
    } catch (error) {
        console.error('error en el controllador de agregar nueva receta',error)
    }
}

export const eliminarRecetaController = async (req,res) => {
    try {
        await eliminarRecetaDB(req.params.id)
        console.log('conectando con el servicvio de eliminar receta')
        return res.status(200).json({message:'receta eliminada correctamente',})
    } catch (error) {
        console.error('erro en el controlador de eliminar receta',error)
    }
}