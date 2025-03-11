//importar el router de express
import { Router } from "express";

import { obtenerClientesController,crearClienteController, actualizarClienteController,obtenerClientePorIdController } from "../controllers/clientes.controller.js";

//definir la ruta mediante Router y llamar a la funcion del controlador

//crear una constante que almacene al metodo Router
const clientesRouter = Router()

//definir las rutas que el router debera escuchar
clientesRouter.get('/obtenerClientes',obtenerClientesController)
clientesRouter.post('/crearCliente',crearClienteController)

//crear ruta para eliminar cliente
clientesRouter.delete('/eliminarCliente/:id',(req,res) => {
    res.send('cliente eliminado')
})

//crear ruta para editar datos del cliente
clientesRouter.put('/actualizarCliente/:id',actualizarClienteController)

clientesRouter.get('/obtenerClientePorId/:id',obtenerClientePorIdController)

//exportar el router
export default clientesRouter;