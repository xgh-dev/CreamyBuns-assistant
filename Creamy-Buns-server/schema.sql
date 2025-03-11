CREATE DATABASE creamybunsDB;

USE creamybunsDB;

CREATE TABLE recetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_del_postre VARCHAR(255),
    precio FLOAT,
    ingredientes TEXT not null,
    procedimiento TEXT not null,
    observaciones TEXT,
    imagen BLOB
)

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    telefono VARCHAR(255),
    correo VARCHAR(255),
    direccion VARCHAR(255)
)
