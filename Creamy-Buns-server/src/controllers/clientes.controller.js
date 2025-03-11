import { obtenerClientesDB,crearClienteService,actualizarClienteService,obtenerClientePorIdService } from "../services/clientes.service.js";

//los controladores son la funciones encargadas de la comunicacion entre las consultas y la base dedatos 

export async function obtenerClientesController(req,res) {
    try {
        //se deja asi para que nuestra variable clientes solo resiva la lista de los clientes y no toda la consulta
        const clientes = await obtenerClientesDB();
        res.status(200).json(clientes)
    } catch (error) {
        console.log('error en el controlador de la obtencion de clientes',error)
    }
}

export async function crearClienteController(req,res) {
    console.log('accediendo al controlador para crear un cliente')
    try {
        await crearClienteService(req.body)
        res.status(200).json({
            message: 'Cliente agregado',
            data: req.body
        })
    } catch (error) {
        console.error('error en el controlador de agregar clientes',error)
    }
}


export async function actualizarClienteController(req,res) {
    console.log('accediendo al controlador para actualizar un cliente')
    try {
        await actualizarClienteService(req.params.id,req.body)
        res.status(200).json({
            message:'datos actualizados',
            data: req.body

        })
    } catch (error) {
        console.error('error en el controlador de actualizar cliente')
    }
}

export async function obtenerClientePorIdController(req,res) {
    try {
        //para esta variable como no nos interesa tener una lista la encampusalos en una lista para mandar al json el primer elemento, siendo este un objeto
        const [respuesta] = await obtenerClientePorIdService(req.params.id)
        res.status(200).json(respuesta) 
    } catch (error) {
        console.log('error en el controlador de obtencion de cliente por id')
    }
}