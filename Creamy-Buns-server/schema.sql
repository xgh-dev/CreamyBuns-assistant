CREATE DATABASE creamybunsDB;

USE creamybunsDB;

CREATE TABLE recetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    precio FLOAT,
    ingredientes TEXT,
    procedimiento TEXT,
    observaciones TEXT,
    imagen_id INT,
    FOREIGN KEY (imagen_id) REFERENCES imagenes(id)
    )

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    telefono VARCHAR(255),
    correo VARCHAR(255),
    direccion VARCHAR(255)
)

CREATE TABLE imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_id TEXT,
    public_id TEXT,
    secure_url TEXT
)

/*consulta para hacer inner join de las tablas*/
SELECT recetas.id,recetas.nombre,recetas.precio,recetas.ingredientes,recetas.procedimiento,recetas.observaciones,imagenes.secure_url
FROM recetas
left join imagenes ON recetas.imagen = imagenes.id;

/*tabla de carrito*/
CREATE TABLE carrito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    receta_id INT,
    cantidad INT,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    FOREIGN KEY (receta_id) REFERENCES recetas(id)
)

/*tabla para el pago de pedido*/
CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrito_id INT,
    pagado  BOOLEAN
)