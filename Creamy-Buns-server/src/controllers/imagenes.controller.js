import { guardarImagen } from "../services/imagenes.service.js";

//crear el controlador
export async function añadirImagenController(req,res) {
    console.log('accediendo al controlador',req.body)
    try {
        const consulta = await guardarImagen(req.body)
        return res.status(201).json({
            message:'Imagen agregada',
            data: consulta
        })
        //console.log('imprimiendo el id desde el controlador',consulta)
    } catch (error) {
        console.error('error en eñ controlador')
    }
    
}