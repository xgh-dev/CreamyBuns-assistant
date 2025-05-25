import { v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'

//configurar la llamada de las variables de estado
dotenv.config()
//configurar cloduinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key : process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

//crear el ejecutable de destroy
export async function destroyImage(public_id) {
    try {
        await cloudinary.uploader.destroy(public_id)
        console.log('imagen eliminada de clodinary')
    } catch (error) {
        console.error('error al eliminar de cloudinary la imagen',error)
    }
}