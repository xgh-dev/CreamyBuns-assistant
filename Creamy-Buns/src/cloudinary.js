import axios from "axios";
import { apiUrl } from "./apiAcces.js";

const ApiKey = import.meta.env.VITE_API_KEY;
const CloudName = import.meta.env.VITE_CLOUD_NAME;

export const loadImage = async (file) => {
  //crear un formDaata para generar la consulta
  const formData = new FormData();
  //agregamos parametros al form data
  formData.append("file", file); //agrega el archivo
  //indica la carpeta
  formData.append("upload_preset", "CreamyBuns");
  //indicar la api_key
  formData.append("api_key", ApiKey);
  //indicar el contador de feha
  formData.append("timestamp", (Date.now() / 1000) | 0);
  //indicar el signature, no es neesario

  //ahora debemos hacer el fetch que consule a la api y mande el form data
  //usamos axios por que se presta mejor a consultas de cloudinary
  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${CloudName}/image/upload
`,
    formData,
    { headers: { "X-Requested-With": "XMLHttpRequest" } } //con esos header le indicamo a cloudinary que hacemos la request desde java script en lugar de una solicitud estandar del navegador, con esto evitamos problemas con cors por que identifia que la peticion viene de un cliente legitimo
  );
  const datos = response.data;
  //ejecutrar la consulta que agregue la imagen en la base de datos y nos retorne su id
  const consulta = await fetch(`${apiUrl}/agregarImagen`, {
    headers: {
      "Content-Type": "application/json", // Importante para enviar JSON
    },
    method: "POST",
    body: JSON.stringify(datos),
  });
  //const archivoUrl = datos.secure_url;
  const resultado = await consulta.json();
  console.log('imprimiendo desde loadimage',resultado.data);//jalamos el id para guardarlo en la variable encargada de ejecutar esta consulta
  return resultado.data
};

export const destroyImage = async (public_id) => {
  console.log(public_id)
}