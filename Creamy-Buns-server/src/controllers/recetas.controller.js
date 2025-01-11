//aqui definiremos el comportamiento de la funcion relacionada a la ruta perzonalizada de cada consulta y la conectaremos con el servicio que se comunica con la base de datos

import { obtenerRecetasDB } from "../services/recetas.service.js";


export const obenterRecetas = async(req,res) =>{
    try {
        const [recetas] = await obtenerRecetasDB();
        res.status(200).json(recetas)
    } catch (error) {
        console.error('error en consulta',error)
    }
}
