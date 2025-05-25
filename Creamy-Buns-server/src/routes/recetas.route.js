import { Router } from "express";
import { obtenerRecetasController,agregarNuevaRecetaController,eliminarRecetaController,obtenerRecetaPorIdController} from "../controllers/recetas.controller.js";

//inicializar el metodo routes de expres
const recetasRouter = Router();

//definir el tipo de consultas que se escucharan

//ruta get
recetasRouter.get('/obtenerRecetas',obtenerRecetasController)

//ruta post
recetasRouter.post('/publicarReceta',agregarNuevaRecetaController)

//ruta put
recetasRouter.put('/actualizarReceta/:id',(req,res) => {
    res.send('realizando actualziacion de receta por id')
})

//ruta delete
recetasRouter.delete('/eliminarReceta',eliminarRecetaController)

//ruta para obtener receta por id
recetasRouter.get('/obtenerReceta/:id',obtenerRecetaPorIdController)

export default recetasRouter;


/*

Los métodos HTTP tienen significados específicos dentro de las APIs RESTful:

GET: Para obtener información del servidor (consulta).
POST: Para crear nuevos recursos.
PUT: Para actualizar recursos existentes.
DELETE: Para eliminar recursos.
Definir el método correcto ayuda a mantener una API organizada y comprensible para otros desarrolladores, siguiendo las convenciones estándar.


*/