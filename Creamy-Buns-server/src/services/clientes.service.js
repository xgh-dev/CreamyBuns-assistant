import conexion from "../config/database.js";

//aqui crearemos los servicios, estas son funciones asincronas que se conectan a la base datos

export async function obtenerClientesDB() {
  //console.log("Conectando con el servicio de obtención de clientes");
  try {
    //crear una constante que almacene los datos
    const [datos] = await conexion.query("SELECT * FROM Clientes");
    //console.log(datos);
    return datos;
  } catch (error) {
    console.log("error al obtener las recetas", error);
    return error;
  }
}

export async function crearClienteService(datos) {
  const { nombre, apellidos, telefono, correo, direccion } = datos;
  try {
    const [consulta] = await conexion.query(
      "INSERT INTO clientes (nombre,apellidos,telefono,correo,direccion) values (?,?,?,?,?)",
      [nombre, apellidos, telefono, correo, direccion]
    );
    //console.log("cliente creado correctamente");
    //asi tomamos el id que asertamos insertId
    //console.log(consulta.insertId)
    return true;
  } catch (error) {
    console.error("error en el servicio de agregar clientes", error);
  }
}

export async function actualizarClienteService(id, datos) {
  //console.log('accediendo al servicio de actualizar datos')
  //console.log(datos)
  const { nombre, apellidos, telefono, correo, direccion } = datos;
  try {
    await conexion.query(
      `UPDATE clientes SET nombre = ?, apellidos = ?,telefono = ?,correo = ?,direccion = ? WHERE id = ?`,
      [nombre, apellidos, telefono, correo, direccion, id]
    );
    console.log("datos del cliente actualizados correctamente");
  } catch (error) {
    console.error("error en el servicio de actualizar ciente",error);
  }
}

export async function obtenerClientePorIdService(id) {
  //console.log("iniciando el servicio para obtener un cliente por id");
  try {
    const [respuesta] = await conexion.query(
      "SELECT * FROM clientes WHERE id=?",
      [id]
    );
    return respuesta; //retornamos el primer elemento de la lista
  } catch (error) {
    console.error("error en el servicio de obtencion de cliente por id", error);
  }
}

export async function eliminarClienteService(id) {
  try {
    await conexion.query("DELETE FROM clientes WHERE id = ?", [id]);
  } catch (error) {
    console.error("error en el servicio de eliminar cliente", error);
  }
}

