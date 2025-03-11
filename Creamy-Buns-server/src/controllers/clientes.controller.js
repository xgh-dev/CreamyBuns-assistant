import { obtenerClientesDB,crearClienteService,actualizarClienteService } from "../services/clientes.service.js";

//los controladores son la funciones encargadas de la comunicacion entre las consultas y la base dedatos 

export async function obtenerClientesController(req,res) {
    try {
        const [clientes] = await obtenerClientesDB();
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