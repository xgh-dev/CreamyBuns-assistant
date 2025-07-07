//aqui configuraremos la conexion a la base de datos
import mysql from 'mysql2'
import dotenv from 'dotenv'

//configurar dotenv para poder conectar las variables de entorno
dotenv.config();

//crear el pool que hara la conexion, debemos asignarle el metodo promise para que funcione como una promesa y pueda accionarse la conexion de recibir las variables correctas
const conexion = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE}
).promise()



//la exportamos por defaul
export default conexion;

