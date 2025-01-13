//crearemos las consultas a la api

//puerto del servidor
const port = 8080
  
//url de la apo
const apiUrl = `http://localhost:${port}/creamybuns`

  //lista de recetas, esta sera la funcion que ejecute el fetch y guarde los datos
export async function obtenerRecetasApi() {
    try {
      const query = await fetch(`${apiUrl}/obtenerRecetas`)
      const recetas  = await query.json()
      console.log(recetas)
      return recetas
    } catch (error) {
      console.error('error en el fetch',error)
    }
  }

export async function nuevaReceta() {
  try {
    console.log('api de nueva receta funcionando') 
  } catch (error) {
    console.error('error en cargar la api de nueva receta',error)
  }  
}

export async function eliminarReceta() {
  try {
    console.log('api de eliminar receta funcionando')
  } catch (error) {
    console.error('error en cargar la api de eliminar receta',error)
  }  
}
