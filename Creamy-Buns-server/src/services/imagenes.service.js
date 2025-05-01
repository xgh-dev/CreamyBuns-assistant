//importar la conexion
import conexion from "../config/database.js";

//crear el servicio que cree registros en la base de datos
export async function guardarImagen(datos) {
    const {asset_id,public_id,secure_url} = datos;
  try {
    const [consulta] = await conexion.query("INSERT INTO imagenes (asset_id,public_id,secure_url) VALUES (?,?,?)",[asset_id,public_id,secure_url]);
    //retornamos el id que ocupa en la consulta
    //console.log(consulta.insertId)
    return consulta.insertId;
  } catch (error) {
    console.error("error en el serviio", error);
  }
}
