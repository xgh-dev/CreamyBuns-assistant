//crearemos las consultas a la api
import { useState, useEffect } from "react";

//puerto del servidor
const port = 8080;

//url de la apo
const apiUrl = `http://localhost:${port}/creamybuns`;

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
  //definiremos un objeto que funcione como un filtro para ordenar por cualquier cosa los datos
  const datosEnJson = {
    nombre_del_postre: datos.nombre_del_postre,
    precio: datos.precio,
    ingredientes: datos.ingredientes,
    procedimiento: datos.procedimiento,
    observaciones: datos.observaciones,
    imagen: datos.imagen,
  };
  try {
    console.log("api de nueva receta funcionando");
    const consulta = await fetch(`${apiUrl}/puclicarReceta`, {
      //definimos el metodo en el cuerpo del fetch
      method: "POST",
      //definimos los header
      headers: { "Content-Type": "application/json" }, // Tipo de contenido
      //definimos el body y enviamos los datos en forma json
      body: JSON.stringify(datosEnJson),
    });
    //como el fetch nos retornara datos estos los convertiremos a formato json para poder mostrarlos en consola
    const respuesta = await consulta.json();
    console.log("receta agregada exitosamente", respuesta);
  } catch (error) {
    console.error("error en cargar la api de nueva receta", error);
  }
}

export async function eliminarRecetaApi(id) {
  try {
    console.log("api de eliminar receta en proceso");
    const consulta = await fetch(`${apiUrl}/eliminarReceta/${id}`, {
      method: "DELETE",
    }); //no olvidar asignar el metodo, ya que si no se especifica se toma como get
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
