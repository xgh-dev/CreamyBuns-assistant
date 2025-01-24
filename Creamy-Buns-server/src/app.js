import express from 'express'
import cors from 'cors'
import indexRouter from './routes/index.route.js'
import fileUpload from 'express-fileupload'

//inicializar la variable que nos llama a express
const app = express()

//definir los permisos de cors
const corsOptions  = {
    origin: 'http://localhost:5173',
    methods: ["POST","GET","DELETE","PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type"], // Encabezados permitidos
    exposedHeaders: ["Content-Type", "Authorization"], // Opcional, para exponer encabezados al cliente

}

//a la variable que contiene express debemos setearle el puerto al que estara escuchando
app.set('port',process.env.PORT)

//a la variable app que contiene el metodo de express() debemos asignarle un metodo use para que utilice el metodo expres.json()
app.use(express.json()); // Sin límite de tamaño
app.use(express.urlencoded({ extended: true })); // Sin límite de tamaño

// Habilitar el middleware para manejar archivos en el `FormData`
app.use(fileUpload());

//asignar el metodo corse y sus opciones
app.use(cors(corsOptions));

//definir la ruta que accedera a las rutas
app.use('/',indexRouter)

//definir la ruta en caso de que se mande el puro puerto
app.use('*',(req,res) => {
    res.send('ruta no encontrada')
})

//definir el puerto al que la app escuchara, definiremos una funcion para que escuche al puerto que esta almacenado en la variable de entorno asignada
app.listen(app.get('port'),() => {
    console.log('Server corriendo en el puerto',app.get('port'))
})
