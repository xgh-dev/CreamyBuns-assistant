import { Router } from "express"
import recetasRouter from "./recetas.route.js"
import clientesRouter from "./clientes.route.js"
import imagenesRouter from "./imagenes.route.js"

const indexRouter = Router()

//prefijo que funcione como iniciador de api
const prefijoApi = 'creamybuns'

//crear las rutas
//crear la ruta raiz que no contenga prefijo
indexRouter.get(`/`,(req,res) => {
    res.send('servidor en linea')
})

//definir la ruta que redirija la consulta relacionada con el recetario
indexRouter.get(`/${prefijoApi}`,(req,res) => {
    res.send('acceso a la app de cb')
})

//definir la ruta que se conectara con los controladores, de esta forma escuchara las consultas realizadas y las redireccionara
indexRouter.use(`/${prefijoApi}`, recetasRouter)

//definir las rutas relacionadas a los clientes
indexRouter.use(`/${prefijoApi}`,clientesRouter)

//definir las rutas relacionada a la carga de imagenes
indexRouter.use(`/${prefijoApi}`,imagenesRouter)


//definir la ruta que redirija la consulta relacionada con los pedidos

export default indexRouter
