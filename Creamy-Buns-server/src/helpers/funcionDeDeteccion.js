export const detectarTipoDeImagen = (buffer) => {
  //creamos un objeto que contenga los tipos de imagen
  const extensiones = {
    jpeg: [0xff, 0xd8, 0xff],
    png: [0x89, 0x50, 0x4e, 0x47],
    gif: [0x47, 0x49, 0x46, 0x38],
    webp: [0x52, 0x49, 0x46, 0x46],
  };
  
  //extraemps los primeros 4 bytes para leerlos
  const bytes = Array.from(buffer.slice(0, 4));

  //evaluamos
  if (bytes.slice(0, 3).every((b, i) => b === extensiones.jpeg[i])) return "image/jpeg";
  if (bytes.every((b, i) => b === extensiones.png[i])) return "image/png";
  if (bytes.every((b, i) => b === extensiones.gif[i])) return "image/gif";
  if (bytes.every((b, i) => b === extensiones.webp[i])) return "image/webp";

  return 'appclication/octet-stream'; //tipo generico que no se reconoce, esto se retorna en caso de que ningun if se cumpla
};

//esta funcion revisa los 'magic numbers' de la imagen para determinar su tipo, y si encuentra la similanza y pasa la condicion nos returnara la extennsión del archivo