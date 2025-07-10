//crearemos las consultas a la api
import { useState, useEffect } from "react";
import { loadImage } from "./cloudinary.js";

//puerto del servidor
const port = import.meta.env.VITE_PORT;

//url de la apo
export const apiUrl = `http://localhost:${port}/creamybuns`;

//lista de recetas, esta sera la funcion que ejecute el fetch y guarde los datos
export async function obtenerRecetasApi() {
  try {
    const query = await fetch(`${apiUrl}/obtenerRecetas`);
    const recetas = await query.json();
    console.log(recetas);
    return recetas;
  } catch (error) {
    console.error("error en el fetch", error);
  }
}

export async function nuevaRecetaApi(datos) {
  if (datos.imagen != null) {
    datos.imagen = await loadImage(datos.imagen);
  } else {
    datos.imagen = "";
  }
  //console.log(datos)
  try {
    //console.log("api de nueva receta funcionando");
    const consulta = await fetch(`${apiUrl}/publicarReceta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Importante para enviar JSON
      },
      body: JSON.stringify(datos), // Enviamos el FormData con los datos y la imagen, en este caso no usamos json.sringify por que enviamos un FormData
    });

    const respuesta = await consulta.json();
    console.log("receta agregada exitosamente", respuesta);
  } catch (error) {
    console.error("error en cargar la api de nueva receta", error);
  }
}

export async function eliminarRecetaApi(id, public_id) {
  try {
    console.log("api de eliminar receta en proceso");
    const consulta = await fetch(
      `${apiUrl}/eliminarReceta`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id,public_id})
      }
    ); //no olvidar asignar el metodo, ya que si no se especifica se toma como get
    const respuesta = await consulta.json();
    console.log("receta eliminada", respuesta);
  } catch (error) {
    console.error("error en cargar la api de eliminar receta", error);
  }
}

export function useObtenerRecetaPorID(id) {
  // Definimos los hooks de apoyo
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [datos, setDatos] = useState(null);

  // Definimos la función que se encargará de resolver la consulta
  const fetchReceta = async () => {
    try {
      const consulta = await fetch(`${apiUrl}/obtenerReceta/${id}`);
      const respuesta = await consulta.json();
      setIsLoading(false);
      setDatos(respuesta);
      console.log("Receta obtenida");
    } catch (err) {
      setIsLoading(false);
      setError(true);
      console.error("Error al obtener la receta:", err);
    }
  };

  // Mediante useEffect nos apoyamos para ejecutar la función cuando se detecte un cambio en el parámetro id
  useEffect(() => {
    if (id) {
      fetchReceta();
    }
  }, [id]);

  // Retornamos los hooks
  return { isLoading, error, datos };
}

export async function obtnerRecetaPorID(id) {
  try {
      const consulta = await fetch(`${apiUrl}/obtenerReceta/${id}`);
      const respuesta = await consulta.json()
      return respuesta;
  } catch (error) {
    console.error('error en el fetch de obtener receta',error)
  }
  console.log('Consulta finalizada')
}

export async function obtenerClientesApi() {
  //inicializamos el trycatch
  try {
    //inicializamos la consulta
    const consulta = await fetch(`${apiUrl}/obtenerClientes`);
    //transformamos los datos a tipo json
    const respuesta = await consulta.json();
    //retornamos
    return respuesta;
  } catch (error) {
    console.error("error en el fetch de obtencion de clientes", error);
  }
}

export async function crearClientesApi(datos) {
  try {
    const consulta = await fetch(`${apiUrl}/crearCliente`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await consulta.json();
    console.log("se agrego correctamente el nuevo cliente", respuesta);
  } catch (error) {
    console.error("error en el fetch de crear clientes", error);
  }
}

export async function eliminarClienteApi(id) {
  try {
    const consulta = await fetch(`${apiUrl}/eliminarCliente/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await consulta.json(consulta);
    console.log("cliente eliminado", respuesta);
  } catch (error) {
    console.error("error en la api de eliminar cliente", error);
  }
}

export async function actualizarCliente(id, datos) {
  //console.log(id)
  //console.log('actualizar cliente',datos)
  try {
    const consulta = await fetch(`${apiUrl}/actualizarCliente/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos), //no olvidar que se debe mandar los datos como un json.stringigy para que se manden las llaves y valores
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await consulta.json();
    console.log("datos actualizados", respuesta);
  } catch (error) {
    console.error("error en la api de actualizar clientes", error);
  }
}
