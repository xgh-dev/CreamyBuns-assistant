//definir la consulta o servicio que se conecta a la base de datos
import conexion from "../config/database.js"

export async function obtenerRecetasDB() {
    console.log('conectando con el servicio')
    try {
        const datos = conexion.query(
            'SELECT * FROM recetas'
        );
        return datos
    } catch (error) {
        console.error('error al obtener los datos de la base de datos',datos)        
    }
}