import { añadirImagenController } from "../controllers/imagenes.controller.js";
//importamos el router de expres  
import { Router } from "express";

const imagenesRouter = Router()

//definir las rutas
imagenesRouter.post('/agregarImagen',añadirImagenController)


//exportamos
export default imagenesRouter