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

