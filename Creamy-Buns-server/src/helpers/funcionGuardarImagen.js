//importar las librerias que usaremos
const fs = require("fs");
const path = require("path");

//crear la funcion que se encargara de ejecutar la lectura de la direccion del archivo para mandarla a la carpeta de interes
export async function guardarImagen(ruta, id) {
  //definir las las variables que guarden la ruta de la carpeta destino, de la imagen origen y podemos indicar un nuevo nombre para la imagen
  const carpetaDeDestino = "D:\\CreamyBuns\\Creamy-Buns-server\\imagenes";
  const imagenOrigen = ruta;
  const renombreDeImagen = `imagen_id_del_postre:${id}.jpg`;

  //crear la funcion que haga los cambios en el sistema, debe ser asincrona
  const accesoAlSistema = async (
    imagenOrigen,
    carpetaDeDestino,
    renombreDeImagen
  ) => {
    try {
      //verificar que la carpeta exista y de lo contrario crearla
      //existsSync es la versin asincrona de exist que comprobueba la existencia de la carpeta de destino
      if (!fs.existsSync(carpetaDeDestino)) {
        //si se cumple la condicion la creamos
        //mkdirSync es la version asincrona de mkdir y se usa para crear directorios nuevos (carpetas), en la ruta que le pasemos
        fs.mkdirSync(carpetaDeDestino, { recursive: true }); //recursive:true permite crear multiples carpetas anidadasm es decirm si la carpeta padre no existe la crea automaticamente
        console.log("la carpeta se creo exitosamente");
      } else {
        console.log("la carpeta se encontro exitosamente");
      }

      //leer la iagen como un buffer
      const data = await fs.promises.readFile(imagenOrigen); //esto nos leera el archivo para poder copiarlo

      //insertar el archivo en otro directorio mediante path
      await fs.promises.writeFile(
        path.join(carpetaDeDestino, renombreDeImagen)
      );
    } catch (error) {
      console.error("error en la ejecucion de guardarImagen", error);
    }
  };
  //llamamos a la funcion
  accesoAlSistema(imagenOrigen, carpetaDeDestino, renombreDeImagen);
}
