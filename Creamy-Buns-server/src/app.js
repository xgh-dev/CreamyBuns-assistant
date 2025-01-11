import express from 'express'

import cors from 'cors'
import indexRouter from './routes/index.route.js'

//inicializar la variable que nos llama a express
const app = express()

//definir los permisos de cors
const corsOptions  = {
    origin: '*',
    methods: ["POST","GET","DELETE","PUT"],
    credentials: true
}

//a la variable que contiene express debemos setearle el puerto al que estara escuchando
app.set('port',process.env.PORT || 8080)

//a la variable app que contiene el metodo de express() debemos asignarle un metodo use para que utilice el metodo expres.json()
app.use(express.json())

//asignar el metodo corse y sus opciones
app.use(cors(corsOptions));

//definir la ruta que accedera a las rutas
app.use('/',indexRouter)

//definir la ruta en caso de que se mande el puro puerto
app.use('*',(req,res) => {
    res.send('runa no encontrada')
})

//definir el puerto al que la app escuchara, definiremos una funcion para que escuche al puerto que esta almacenado en la variable de entorno asignada
app.listen(app.get('port'),() => {
    console.log('Server corriendo en el puerto',app.get('port'))
})
