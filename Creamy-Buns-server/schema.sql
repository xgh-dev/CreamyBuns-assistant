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
);
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    telefono VARCHAR(255),
    correo VARCHAR(255),
    direccion VARCHAR(255)
);
CREATE TABLE imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_id TEXT,
    public_id TEXT,
    secure_url TEXT
);
/*consulta para hacer inner join de las tablas*/
SELECT recetas.id,
    recetas.nombre,
    recetas.precio,
    recetas.ingredientes,
    recetas.procedimiento,
    recetas.observaciones,
    imagenes.secure_url
FROM recetas
    left join imagenes ON recetas.imagen = imagenes.id;
/*tabla de carrito*/
CREATE TABLE carrito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    receta_id INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (receta_id) REFERENCES recetas(id)
);
/*tabla para el pago de pedido*/
CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrito_id INT NOT NULL,
    pagado BOOLEAN NOT NULL,
    FOREIGN KEY (carrito_id) REFERENCES carrito(id)
);
/*consulta para extraer registros de la tabla carrito con datos de las tablas clientes y recetas*/
SELECT clientes.nombre,
    clientes.apellidos,
    recetas.nombre,
    carrito.cantidad
FROM (
        (
            carrito
            INNER JOIN clientes ON clientes.id = carrito.cliente_id
        )
        INNER JOIN recetas ON recetas.id = carrito.receta_id
    );
/*consulta para extraer solo las consultas de carrito con respecto a un id en especifico*/
SELECT clientes.nombre,
    clientes.apellidos,
    recetas.nombre,
    carrito.cantidad
FROM (
        (
            carrito
            INNER JOIN clientes ON clientes.id = carrito.cliente_id
        )
        INNER JOIN recetas ON recetas.id = carrito.receta_id
    )
where carrito.cliente_id = 4;
/*consulta para extraer solo las consultas de carrito con respecto a un id en especifico y agregando otros datos, asi como renombrar una columna*/
SELECT clientes.nombre,
    clientes.apellidos,
    recetas.nombre,
    recetas.precio,
    carrito.cantidad,
    recetas.precio * carrito.cantidad as total
FROM (
        (
            carrito
            INNER JOIN clientes ON clientes.id = carrito.cliente_id
        )
        INNER JOIN recetas ON recetas.id = carrito.receta_id
    )
where carrito.cliente_id = 4;
/*crear tabla de pedido para que se cree un registro y este se pueda ligar a una tabla de detalle de pedidos*/
/*
 crear la tabla de pedidos con los siguientes detalles
 que reciba la llave foranea del cliente id
 que un concepto se genere y contenga la fecha y hora de cuando se creo
 que tenga un concepto que alterne valores y que el predeterminado sea pendiente, los enumarados deben ser pendiente, cancelado y pagado
 que tenga un concepto del monto total a pagar (no es necesario)
 */
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    nombre_cliente VARCHAR(255),
    estado ENUM ('Pendiente', 'Cancelado', 'Pagado') DEFAULT 'Pendiente',
    total INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
/*detalle del pedido, esta tabla almacena los detalles del pedido, esta tabla debe guardar los detalles de un pedido cuando este se genere, como lo son el id del pedido, la receta, la cantidad.
 Practicamente debe ser un carrito enfocado en almacenar cuando los registros de el carrito se borren
 */
CREATE TABLE detalles_del_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedidos_id INT NOT NULL,
    recetas_id INT NOT NULL,
    nombre_receta VARCHAR(255),
    precio FLOAT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (pedidos_id) REFERENCES pedidos(id),
    FOREIGN KEY (recetas_id) REFERENCES recetas(id)
);