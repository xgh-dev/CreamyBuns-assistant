import { Router } from "express";
import { obenterRecetas } from "../controllers/recetas.controller.js";

//inicializar el metodo routes de expres
const recetasRouter = Router();

//definir el tipo de consultas que se escucharan

//ruta get
recetasRouter.get('/obtenerRecetas',obenterRecetas)

//ruta post
recetasRouter.post('/puclicarReceta',(req,res) => {
    //esta consulta mandara el cuerpo de esta al controlador para obtener las variables con datos
    res.send('realizando consulta post')
})

//ruta put
recetasRouter.put('/actualizarReceta/:id',(req,res) => {
    res.send('realizando actualziacion de receta por id')
})

//ruta delete
recetasRouter.delete('/eliminarReceta/:id',(req,res)=>{
    res.send('eliminando receta')
})


export default recetasRouter;


/*

Los métodos HTTP tienen significados específicos dentro de las APIs RESTful:

GET: Para obtener información del servidor (consulta).
POST: Para crear nuevos recursos.
PUT: Para actualizar recursos existentes.
DELETE: Para eliminar recursos.
Definir el método correcto ayuda a mantener una API organizada y comprensible para otros desarrolladores, siguiendo las convenciones estándar.


*/