import axios from "axios";

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
  return axios
    .post(
      `https://api.cloudinary.com/v1_1/${CloudName}/image/upload
`,
      formData
    )
    .then((response) => {
      const datos = response.data;
      const archivoUrl = datos.secure_url;
      return archivoUrl;
    });
};
